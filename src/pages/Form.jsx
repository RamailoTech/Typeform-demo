import React, { useContext, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Formpage } from "../components/Formpage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FormContext from "../context/form/FormContext";
import "../assets/styles/form.css";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";
import VerticalAnimation from "../animations/VerticalAnimation";
import { navigateNext, navigatePrev } from "../utils/navigate";
import { useFilteredQuestions } from "../hooks/useQuestion";

export const Form = () => {
  const {
    visiblePageNumber,
    setVisiblePageNumber,
    pageLength,
    progress,
    setProgress,
    direction,
    setDirection,
    setPageLength,
  } = useContext(FormContext);

  const filteredQuestions = useFilteredQuestions();

  let activeQuestion = filteredQuestions[visiblePageNumber - 1];
  useEffect(() => {
    setPageLength(filteredQuestions.length);
  }, [filteredQuestions, setPageLength]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: "8px",
            postion: "fixed",
            top: "0px",
            zIndex: "999",
          }}
        />
      </Box>
      <div className={`wrapper`}>
        <VerticalAnimation
          activeIndex={visiblePageNumber}
          direction={direction}
        >
          <Formpage question={activeQuestion} navigateNext={navigateNext} />
        </VerticalAnimation>

        <div className="navigation">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                navigatePrev(
                  visiblePageNumber,
                  setVisiblePageNumber,
                  setDirection
                );
              }}
              disabled={visiblePageNumber === 1}
              sx={{ backgroundColor: "#0445af" }}
            >
              <ExpandLessIcon />
            </Button>
            <Button
              onClick={() => {
                navigateNext(
                  visiblePageNumber,
                  pageLength,
                  setVisiblePageNumber,
                  setDirection
                );
                var progressbar = Math.floor(
                  (visiblePageNumber / pageLength) * 100
                );
                setProgress(progressbar);
              }}
              disabled={visiblePageNumber === pageLength}
              sx={{ backgroundColor: "#0445af" }}
            >
              <ExpandMoreIcon />
            </Button>
          </ButtonGroup>

          <Button variant="contained" sx={{ backgroundColor: "#0445af " }}>
            Powered by Ramailo.tech
          </Button>
        </div>
      </div>
    </>
  );
};

import React, { useContext, useEffect } from "react";
import QuestionContext from "../context/questions/QuestionContext";
import { Button, ButtonGroup } from "@mui/material";
import { Formpage } from "../components/Formpage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FormContext from "../context/form/FormContext";
import "../assets/styles/form.css";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

export const Form = () => {
  let questions = useContext(QuestionContext);
  const {
    visiblePageNumber,
    setVisiblePageNumber,
    setPageLength,
    pageLength,
    progress,
    setProgress,
    setGlobalIndex,
  } = useContext(FormContext);

  const navigateNext = () => {
    if (visiblePageNumber < pageLength) {
      setVisiblePageNumber(visiblePageNumber + 1);
    }
  };

  const navigatePrev = () => {
    if (visiblePageNumber > 0) {
      setVisiblePageNumber(visiblePageNumber - 1);
    }
  };

  useEffect(() => {
    const arrayWithoutChildren = questions.filter(
      (question) => question.parent === undefined
    );

    setPageLength(arrayWithoutChildren.length);
  }, [questions, setPageLength]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: "8px", postion: "fixed", top: "0px", zIndex: "999" }}
        />
      </Box>
      <div className={`wrapper`}>
        {questions.map((question, index) => {
          return (
            <Formpage
              key={index}
              index={index}
              question={question}
              navigateNext={navigateNext}
            />
          );
        })}
        <div className="navigation">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                navigatePrev();
              }}
              disabled={visiblePageNumber === 1}
              sx={{ backgroundColor: "#0445af" }}
            >
              <ExpandLessIcon />
            </Button>
            <Button
              onClick={() => {
                navigateNext();
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

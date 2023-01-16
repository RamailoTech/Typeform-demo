import React, { useContext, useEffect } from "react";
import QuestionContext from "../context/questions/QuestionContext";
import { Button, ButtonGroup } from "@mui/material";
import { Formpage } from "../components/Formpage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FormContext from "../context/form/FormContext";
import "../assets/styles/form.css";

export const Form = () => {
  let questions = useContext(QuestionContext);
  const { visiblePageNumber, setVisiblePageNumber, setPageLength, pageLength } =
    useContext(FormContext);

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
    <div className={`wrapper`}>
      {questions.map((question, index) => {
        return <Formpage question={question} navigateNext={navigateNext} />;
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
  );
};

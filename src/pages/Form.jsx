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
  const {
    page,
    setPage,
    formValue,
    visiblePageNumber,
    setVisiblePageNumber,
    setPageLength,
    pageLength,
  } = useContext(FormContext);

  return (
    <div className={`wrapper`}>
      {questions.map((question, index) => {
        if (question.parentId !== undefined) {
          let parentQuestion = questions.find(
            (item) => item.id === question.parentId
          );
          if (formValue[parentQuestion.question] === question.parent) {
            setPageLength(pageLength + 1);
            return (
              <Formpage
                items={question}
                pageno={visiblePageNumber}
                activePage={page}
              />
            );
          }
        } else {
          setPageLength(pageLength + 1);

          return (
            <Formpage
              items={question}
              pageno={visiblePageNumber}
              activePage={page}
            />
          );
        }
        return <></>;
      })}
      <div className="navigation">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              setPage(Math.max(page - 1, 0));
              setVisiblePageNumber(Math.max(visiblePageNumber - 1, 0));
            }}
            disabled={page === 0}
            sx={{ backgroundColor: "#0445af" }}
          >
            <ExpandLessIcon />
          </Button>
          <Button
            onClick={() => {
              if (page <= questions.length - 1) {
                setPage(Math.min(page + 1, questions.length - 1));
                setVisiblePageNumber(visiblePageNumber + 1);
              }
            }}
            disabled={page === questions.length - 1}
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

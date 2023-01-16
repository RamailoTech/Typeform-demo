import React, { useContext, useEffect, useRef } from "react";
import { Grid, Box, Button } from "@mui/material";
import flower from "../assets/images/flower.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextInput } from "../components/input/textInput/inputs";
import { RadioInput } from "../components/input/radioInput/RadioInput";
import MultipleChoice from "../components/input/multipleChoice/MultipleChoice";
import Autocomplete from "../components/input/autoComplete/autoCompleteInput";
import { DateInput } from "../components/input/dateInput";
import FormContext from "../context/form/FormContext";
import QuestionContext from "../context/questions/QuestionContext";
import { Link, Navigate } from "react-router-dom";
import { NavigateNext } from "@mui/icons-material";
import LinearProgress from "@mui/material/LinearProgress";

export const Formpage = ({ question, navigateNext, index }) => {
  const {
    visiblePageNumber,
    setVisiblePageNumber,
    setPageLength,
    pageLength,
    formValue,
    setProgress,
  } = useContext(FormContext);
  // let questions = useContext(QuestionContext);
  const inputref = useRef(null);

  const handleChange = () => {
    navigateNext(visiblePageNumber, pageLength, setVisiblePageNumber);
    var progressbar = Math.floor((visiblePageNumber / pageLength) * 100);
    setProgress(progressbar);
  };

  useEffect(() => {
    if (inputref.current) {
      inputref.current.focus();
    }
  }, [inputref]);

  const renderForm = (item) => {
    return (
      <>
        <div
          style={{
            transform: `translateY(-${(visiblePageNumber - 1) * 100}%)`,
          }}
          className="transition-ease-in-out"
        >
          <Grid container spacing={0}>
            <Grid item xs={6} className="wrapper-grid1">
              <Box className="box-grid">
                <p className="grid-question">
                  <span className="question-number">{visiblePageNumber}</span>
                  <ArrowForwardIcon
                    color="primary"
                    sx={{ fontSize: { md: "20px" } }}
                  />
                  {item.question}
                </p>
                {item.answer.type === "text" ? (
                  <TextInput question={item.question} inputref={inputref} />
                ) : question.answer.type === "radio" ? (
                  <RadioInput
                    question={item.question}
                    index={index}
                    options={item.answer.options}
                  />
                ) : question.answer.type === "dropdown" ? (
                  <Autocomplete
                    question={item.question}
                    options={item.answer.options}
                  />
                ) : item.answer.type === "dateInput" ? (
                  <DateInput question={item.question} />
                ) : (
                  <MultipleChoice
                    options={item.answer.options}
                    question={item.question}
                  />
                )}

                <div>
                  {pageLength === visiblePageNumber ? (
                    <Link to="/typeform/result">
                      <Button variant="contained" className="grid-button">
                        Submit
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="contained"
                      className="grid-button"
                      endIcon={
                        <CheckIcon
                          sx={{
                            fontSize: "40",
                            marginLeft: { md: "-8px", lg: "-2px" },
                          }}
                        />
                      }
                      onClick={handleChange}
                    >
                      OK
                    </Button>
                  )}
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} className="wrapper-grid2">
              <img src={flower} alt="flower" />
            </Grid>
          </Grid>
        </div>
      </>
    );
  };

  const RenderChild = () => {
    const selectedOption = formValue[question.question];
    let children = question.answer.children[selectedOption];
    useEffect(() => {
      if (selectedOption !== undefined && children !== undefined) {
        setPageLength(pageLength + children.length);
      }
    }, [selectedOption]);

    if (selectedOption !== undefined && children !== undefined) {
      return children.map((child) => {
        return renderForm(child);
      });
    } else {
      return null;
    }
  };

  return (
    <>
      {renderForm(question)}
      {question.answer.children !== undefined ? RenderChild() : ""}
    </>
  );
};

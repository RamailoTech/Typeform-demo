import React, { useCallback, useContext, useEffect, useRef } from "react";
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
import { Link, useNavigate } from "react-router-dom";

export const Formpage = ({ question }) => {
  const {
    visiblePageNumber,

    pageLength,

    navigateNext,
  } = useContext(FormContext);
  const inputref = useRef(null);
  const navigate = useNavigate();

  const handleChange = useCallback(() => {
    navigateNext();
   
  }, [navigateNext, pageLength, visiblePageNumber]);

  useEffect(() => {
    if (inputref.current) {
      inputref.current.focus();
    }
  }, [inputref, question]);


  const handlelistner = (event) => {
    if (event.key === "Enter") {
      if (pageLength === visiblePageNumber) {
        return navigate("/typeform/result");
      }
      handleChange();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlelistner);
    return () => {
      document.removeEventListener("keydown", handlelistner);
    };
  }, [handleChange, navigate, pageLength, visiblePageNumber]);

  const RenderForm = (question) => {
    return (
      <>
        <div className="transition-ease-in-oxut">
          <Grid container spacing={0}>
            <Grid item xs={6} className="wrapper-grid1">
              <Box className="box-grid">
                <p className="grid-question">
                  <span className="question-number">{visiblePageNumber}</span>
                  <ArrowForwardIcon
                    color="primary"
                    sx={{ fontSize: { md: "20px" } }}
                  />
                  {question?.question}
                </p>
                {question?.answer?.type === "text" ? (
                  <TextInput question={question} inputref={inputref} />
                ) : question?.answer?.type === "radio" ? (
                  <RadioInput
                    question={question}
                    options={question?.answer?.options}
                  />
                ) : question?.answer?.type === "dropdown" ? (
                  <Autocomplete
                    question={question}
                    options={question?.answer?.options}
                    inputref={inputref}
                  />
                ) : question?.answer?.type === "dateInput" ? (
                  <DateInput question={question} inputref={inputref} />
                ) : (
                  <MultipleChoice
                    options={question?.answer?.options}
                    question={question}
                  />
                )}

                <div>
                  {pageLength === visiblePageNumber ? (
                    <Link
                      to="/typeform/result"
                      style={{ textDecoration: "none" }}
                    >
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
                            fontSize: { lg: "large" },
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

  return <>{RenderForm(question)}</>;
};

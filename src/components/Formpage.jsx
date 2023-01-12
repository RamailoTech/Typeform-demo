import React, { useContext } from "react";
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
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

export const Formpage = ({ question, navigateNext }) => {
  const {
    visiblePageNumber,
    setVisiblePageNumber,
    setPageLength,
    pageLength,
    formValue,
    progress,
    setProgress,
  } = useContext(FormContext);
  let questions = useContext(QuestionContext);

  const handleChange = () => {
    navigateNext(visiblePageNumber, pageLength, setVisiblePageNumber);
    var progressbar = Math.floor((visiblePageNumber / pageLength) * 100);
    setProgress(progressbar);
  };
  const renderForm = (item) => {
    // console.log("render form item", item);

    return (
      <>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: "8px" }}
          />
        </Box>
        <div
          style={{
            transform: `translateY(-${(visiblePageNumber - 1) * 101}%)`,
          }}
          className="transition-ease-in-out"
        >
          <Grid container spacing={0}>
            <Grid item xs={6} className="wrapper-grid1">
              <Box className="box-grid">
                <p className="grid-question">
                  <span>{visiblePageNumber}</span>
                  <ArrowForwardIcon color="primary" sx={{ fontSize: "14px" }} />
                  {item.question}
                </p>
                {item.answer.type === "text" ? (
                  <TextInput question={item.question} />
                ) : question.answer.type === "radio" ? (
                  <RadioInput
                    question={item.question}
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
                      endIcon={<CheckIcon />}
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

  const renderChild = () => {
    const selectedOption = formValue[question.question];
    if (selectedOption !== undefined) {
      let children = question.answer.children[selectedOption];
      setPageLength(questions.length + children.length);

      return children.map((child, i) => {
        return renderForm(child);
      });
    }
  };

  return (
    <>
      {renderForm(question)}
      {question.answer.children !== undefined ? renderChild() : <></>}
    </>
  );
};

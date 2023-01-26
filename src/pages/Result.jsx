import React, { useContext, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormContext from "../context/form/FormContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import QuestionContext from "../context/questions/QuestionContext";
import { useFilteredQuestions } from "../hooks/useQuestion";

const Result = () => {
  const { formValue, setFormValue, setVisiblePageNumber } =
    useContext(FormContext);
  let questions = useContext(QuestionContext);
  const filteredQuestions = useFilteredQuestions();
  console.log(filteredQuestions);
  const finalquestion = filteredQuestions.map((value, key) => value.name);

  useEffect(() => {
    setFormValue((prev) => {
      return Object.keys(prev)
        .filter((key) => finalquestion.includes(key))
        .reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: prev[key],
          });
        }, {});
    });
  }, [setFormValue]);

  return (
    <Container sx={{ marginTop: "6rem" }}>
      {Object.entries(formValue).map(
        ([key, value]) =>
          value &&
          value.length > 0 && (
            <div key={key}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {questions.map((quest, i) =>
                      quest.name === key ? quest.question : ""
                    )}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{value && value + " "}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )
      )}
      <Link to="/">
        <Button
          variant="contained"
          className="grid-button"
          sx={{ marginTop: "10px" }}
          onClick={() => {
            setFormValue({});
            setVisiblePageNumber(1);
          }}
        >
          Cancel
        </Button>
      </Link>
    </Container>
  );
};

export default Result;

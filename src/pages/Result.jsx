import React, { useContext } from "react";
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
  console.log(filteredQuestions) 
  const finalquestion=filteredQuestions.map((value,key)=>(value.name))
  console.log(finalquestion)
  let newanswer={}
  for(let key in formValue){
   finalquestion.filter((value)=>{
    if(key===value){
      newanswer[key]=formValue[key]
    }
   })
  }
  return (
    <Container sx={{ marginTop: "6rem" }}>
      {Object.entries(formValue).map(
        ([key, value]) =>
        finalquestion.includes(key)&&
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
                      quest.name===key? quest.question : ""
                    )}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{ value && value + " "}</Typography>
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

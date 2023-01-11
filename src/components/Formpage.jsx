import React, { useContext } from "react";
import { Grid, Box, Button } from "@mui/material";
import flower from "../assets/images/flower.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextInput } from "../components/input/textInput/inputs";
import { RadioInput } from "../components/input/radioInput/RadioInput";
import MultipleChoice from "../components/input/multipleChoice/MultipleChoice";
import Autocomplete from "../components/input/autoComplete/autoCompleteInput";
import {DateInput} from "../components/input/dateInput";
import FormContext from "../context/form/FormContext";
import QuestionContext from "../context/questions/QuestionContext";
import {Link} from "react-router-dom";


export const Formpage = ({ items, activePage, pageno }) => {
  const questions = useContext(QuestionContext)
  const { page, setPage } = useContext(FormContext)
  return (
    <div
      style={{ transform: `translateY(-${activePage * 100}%)` }}
      className="transition-ease-in-out"
    >
      <Grid container spacing={0}>
        <Grid item xs={6} className="wrapper-grid1">
          <Box className="box-grid">
            <p className="grid-question">
              <span>{pageno + 1}</span>
              <ArrowForwardIcon color="primary" sx={{ fontSize: "14px" }} />
              {items.question}
            </p>
            {items.answer.type === "text" ? (
              <TextInput question={items.question} />
            ) : items.answer.type === "radio" ? (
              <RadioInput
                question={items.question}
                options={items.answer.options}
              />
            ) : items.answer.type === "dropdown" ? (
              <Autocomplete  question={items.question} options={items.answer.options} />
            ) : items.answer.type === "dateInput" ? (
              <DateInput  question={items.question}/>
            ): (
              <MultipleChoice options={items.answer.options}  question={items.question} />
            )}

            <div>
              {
                (page===questions.length-1)?(
                 <Link to="/typeform/result" ><Button variant="contained" className="grid-button">Submit</Button></Link>
                ):
                <Button variant="contained" className="grid-button" endIcon={<CheckIcon />}   
                onClick={() => setPage(Math.min(page + 1, questions.length - 1))}>
                  OK
                </Button>
              }
             
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} className="wrapper-grid2">
          <img src={flower} alt="flower" />
        </Grid>
      </Grid>
    </div>
  );
};

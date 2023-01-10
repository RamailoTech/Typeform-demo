import React,{useState} from "react";
import { Grid, Box, Button } from "@mui/material";
import flower from "../assets/images/flower.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {TextInput} from "../components/input/textInput/inputs"
import {RadioInput} from "../components/input/radioInput/RadioInput";
import MultipleChoice from "../components/input/multipleChoice/MultipleChoice";
import Autocomplete from "../components/input/autoComplete/autoCompleteInput";
export const Formpage = ({ items }) => {
  const[pages, SetPages]=useState(false)
 
  return (
    <div className={`wrapper ${pages && `translatepage`}`}>
      <Grid container spacing={0}>
        <Grid item xs={6} className="wrapper-grid1">
          <Box className="box-grid">
            <p className="grid-question">
              <span>1</span>
              <ArrowForwardIcon color="primary" sx={{ fontSize: "14px" }} />
              {items.question}
            </p>
            {
              items.answer.type==="text"?<TextInput/>:items.answer.type==="radio"?<RadioInput options={items.answer.options}/>:items.answer.type==="dropdown"?<Autocomplete/>:<MultipleChoice options={items.answer.options}/>
            }
          
           <div>
            <Button variant="contained" endIcon={<CheckIcon />}>
              OK
            </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} className="wrapper-grid2">
          <img src={flower} alt="flower" />
          <Button variant="contained" className="btn-banner1">
            Powered by Typeform
          </Button>
          <Button variant="contained" className="btn-banner2" endIcon={<CheckIcon />} onClick={()=>SetPages(true)}>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

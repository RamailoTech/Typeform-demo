import React,{useContext} from "react";
import { Grid, Box, Button} from "@mui/material";
import flower from "../assets/images/flower.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {TextInput} from "../components/input/textInput/inputs"
import {RadioInput} from "../components/input/radioInput/RadioInput";
import MultipleChoice from "../components/input/multipleChoice/MultipleChoice";
import Autocomplete from "../components/input/autoComplete/autoCompleteInput";
import FormContext from "../context/form/FormContext";

export const Formpage = ({ items,pageno }) => {
  const {page,setPage}=useContext(FormContext)
  return (
    <div className={`wrapper`}>
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
            Powered by Ramailo.tech
          </Button>
          <Button variant="contained" className="btn-banner2" onClick={()=>setPage(page-1)}>
          <CheckIcon/>
          </Button>
          <Button variant="contained" className="btn-banner2" onClick={()=>setPage(page-1)} >
          <CheckIcon/>
          </Button>
          
        </Grid>
      </Grid>
    </div>
  );
};

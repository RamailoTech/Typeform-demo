import React from "react";
import "../styles/firstpage.css";
import { Grid, Box, Button } from "@mui/material";
import flower from "../images/flower.jpg";
import CheckIcon from "@mui/icons-material/Check";
import { TextInput } from "../components/input/textInput/inputs";
import { RadioInput } from "../components/input/radioInput/RadioInput";

export const Firstpage = () => {
  return (
    <div className="wrapper">
      <Grid container spacing={0}>
        <Grid item xs={6} className="wrapper-grid1">
          <Box className="box-grid">
            <p className="grid-question">
              <span>1</span> Hello, what's your name?
            </p>
            <TextInput />
            <RadioInput />
            <Button variant="contained" endIcon={<CheckIcon />}>
              OK
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} className="images">
          <img src={flower} alt="flower" />
        </Grid>
      </Grid>
    </div>
  );
};

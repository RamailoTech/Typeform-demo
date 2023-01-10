import React from "react";
import { Grid, Box, Button } from "@mui/material";
import flower from "../assets/images/flower.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {TextInput} from "../components/input/textInput/inputs"
export const Formpage = ({ items }) => {
  return (
    <div className="wrapper">
      <Grid container spacing={0}>
        <Grid item xs={6} className="wrapper-grid1">
          <Box className="box-grid">
            <p className="grid-question">
              <span>1</span>
              <ArrowForwardIcon color="primary" sx={{ fontSize: "14px" }} />
              {items.question}
            </p>
           <TextInput/>
           <div>
            <Button variant="contained" endIcon={<CheckIcon />}>
              OK
            </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} className="wrapper-grid2">
          <img src={flower} alt="flower" />
          <Button variant="contained" className="btn-banner">
            Powered by Typeform
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

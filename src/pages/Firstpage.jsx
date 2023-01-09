import React from 'react'
import "../styles/firstpage.css"
import {Grid,Box,TextField,Button} from '@mui/material';
import flower from '../images/flower.jpg'
import CheckIcon from '@mui/icons-material/Check';

export const Firstpage = () => {
  return (
    <div className="wrapper">
      <Grid container spacing={0}>
        <Grid item xs={6} className="wrapper-grid1">
          <Box className="box-grid">
            <p className="grid-question"><span>1</span> Hello, what's your name?</p>
            <input
              type="text"
              className="answer_input"
              placeholder="Type your answer here..."
            />
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

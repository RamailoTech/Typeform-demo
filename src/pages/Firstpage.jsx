import React from 'react'
import "../styles/firstpage.css"
import {Grid,Box,TextField  } from '@mui/material';
import flower from '../images/flower.jpg'

export const Firstpage = () => {
  return (
    <div className='wrapper'>
    <Grid container spacing={0}>
    <Grid item xs={6} className="wrapper-grid1">
    <Box className="box-grid" >
     <p className="grid-question"> Hello, what's your name?</p>
     <TextField  label="Standard" variant="standard" color="primary" fullWidth  />
     
    </Box>
    </Grid>
    <Grid item xs={6} className="images">
    <img src={flower} alt="flower"/>
    </Grid>
   
  </Grid>
  </div>
  )
}

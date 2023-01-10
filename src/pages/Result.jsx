import React from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography,Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Result = () => {
  return (
    <Container sx={{marginTop:"6rem"}}> 
        <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Hello, what's your name?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
       Karina Shrestha
      </Typography>
    </AccordionDetails>
     </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>Accordion 2</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
 
  </Container>
  )
}

export default Result
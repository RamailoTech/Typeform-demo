import React,{useContext} from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography,Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormContext from '../context/form/FormContext';
const Result = () => {
    const {formValue} = useContext(FormContext)
  
 
  return (
    <Container sx={{marginTop:"6rem"}}> 
    {Object.entries(formValue).map(([key, value]) => (
    <div key={key}>
         <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{key}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {value+ " "}
      </Typography>
    </AccordionDetails>
     </Accordion></div>
))}
      
 
 
  </Container>
  )
}

export default Result
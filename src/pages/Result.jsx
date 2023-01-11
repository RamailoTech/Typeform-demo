import React,{useContext} from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography,Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormContext from '../context/form/FormContext';
import {Link} from "react-router-dom";
import {Button } from "@mui/material";

const Result = () => {
    const {formValue} = useContext(FormContext)
    const { page, setPage } = useContext(FormContext)

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
      <Link to="/" ><Button variant="contained" className="grid-button" sx={{marginTop:"10px"}} onClick={() => setPage(0)}>Cancel</Button></Link>
  </Container>
  )
}

export default Result
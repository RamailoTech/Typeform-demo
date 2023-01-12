import React, { useContext } from "react"
import QuestionContext from "../context/questions/QuestionContext"
import { Button, ButtonGroup } from "@mui/material"
import { Formpage } from "../components/Formpage"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import FormContext from "../context/form/FormContext"
import "../assets/styles/form.css"

export const Form = () => {
  const questions = useContext(QuestionContext)
  const { page, setPage,progress,setProgress } = useContext(FormContext)
  const handleClick1= () => {
    setPage(Math.max(page - 1, 0))
    let NewProgress=progress-100/questions.length
    setProgress(NewProgress)
 }
 const handleClick2= () => {
  setPage(Math.min(page + 1, questions.length - 1))
  let NewProgress=progress+100/questions.length
  setProgress(NewProgress)
}

  return (
    <div className={`wrapper`}>
      {questions.map((items, index) => {
        return <Formpage items={items} pageno={index} activePage={page} />
      })}
      <div className="navigation">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            
            onClick={handleClick1}
            disabled={page === 0}
            sx={{backgroundColor:"#0445af"}}
          >
            <ExpandLessIcon />
          </Button>
          <Button
            onClick={handleClick2}
            disabled={page === questions.length - 1}
            sx={{backgroundColor:"#0445af"}}
          >
            <ExpandMoreIcon />
          </Button>
        </ButtonGroup>

        <Button variant="contained"  sx={{backgroundColor:"#0445af "}}>
          Powered by Ramailo.tech
        </Button>
      </div>
    </div>
  )
}

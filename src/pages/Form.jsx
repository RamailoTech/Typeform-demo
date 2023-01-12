import React, { useContext, useEffect } from "react"
import QuestionContext from "../context/questions/QuestionContext"
import { Button, ButtonGroup } from "@mui/material"
import { Formpage } from "../components/Formpage"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import FormContext from "../context/form/FormContext"
import "../assets/styles/form.css"
import {navigatePrev,navigateNext} from "../utils/navigate"
export const Form = () => {
  let questions = useContext(QuestionContext)
  const {
    progress,
     setProgress,
    visiblePageNumber,
    setVisiblePageNumber,
    setPageLength,
    pageLength,
  } = useContext(FormContext)

  useEffect(() => {
    const arrayWithoutChildren = questions.filter(
      (question) => question.parent === undefined
    )

    setPageLength(arrayWithoutChildren.length)
  }, [questions, setPageLength])

  return (
    <div className={`wrapper`}>
      {questions.map((question, index) => {
        return <Formpage question={question} navigateNext={navigateNext} />
      })}
      <div className="navigation">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              navigatePrev(visiblePageNumber,setVisiblePageNumber)
             
             
            }}
            disabled={visiblePageNumber === 1}
            sx={{ backgroundColor: "#0445af" }}
          >
            <ExpandLessIcon />
          </Button>
          <Button
            onClick={() => {
              navigateNext(visiblePageNumber,pageLength,setVisiblePageNumber)
              var progressbar=(Math.floor((visiblePageNumber/pageLength)*100));
              setProgress(progressbar)
            }}
            disabled={visiblePageNumber === pageLength}
            sx={{ backgroundColor: "#0445af" }}
          >
            <ExpandMoreIcon />
          </Button>
        </ButtonGroup>

        <Button variant="contained" sx={{ backgroundColor: "#0445af " }}>
          Powered by Ramailo.tech
        </Button>
      </div>
    </div>
  )
}

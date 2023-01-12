import React, { useContext,useState,useRef,useEffect} from "react";
import "../input.css";
import FormContext from "../../../context/form/FormContext";
import QuestionContext from "../../../context/questions/QuestionContext";


export const TextInput = ({ question }) => {
  const { formValue, setFormValue,page,setPage,progress, setProgress } = useContext(FormContext);
  const questions = useContext(QuestionContext)
const inputref=useRef(null)
  const handleKeyDown=(e)=>{
    if (e.key === 'Enter'  ) {
      setPage(Math.min(page + 1, questions.length - 1))
      let NewProgress=progress+100/questions.length
      setProgress(NewProgress) 
    }
    if (e.key === 'ArrowUp') {
      
    }
    if (e.key === 'ArrowDown') {
      
    }

  }

  const handleChange = (e) => {
   
    setFormValue({ ...formValue, [question]: e.target.value });

  };
  useEffect(()=>{
    inputref.current.focus()
  },[])
  return (
    <>
    <input
      type="text"
      className="text_answer_input"
      placeholder="Type your answer here..."
      onChange={handleChange}
      ref={inputref}
      onKeyDown={handleKeyDown}
    />
   
        </>
  );
};

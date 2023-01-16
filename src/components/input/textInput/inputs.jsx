import React,{useContext,useState,useRef,useEffect} from "react";
import "../input.css";
import FormContext from "../../../context/form/FormContext";
import QuestionContext from "../../../context/questions/QuestionContext";
import {navigateNext} from "../../../utils/navigate";


export const TextInput = ({ question }) => {
  const { formValue, setFormValue,visiblePageNumber,pageLength,setVisiblePageNumber,setProgress} = useContext(FormContext);
  const inputref=useRef();
  const handleChange = (e) => {
    setFormValue({ ...formValue, [question]: e.target.value });
  };
  const handleKey=(e)=>{
   if(e.key==='Enter'){
    navigateNext(visiblePageNumber,pageLength,setVisiblePageNumber)
    var progressbar=(Math.floor((visiblePageNumber/pageLength)*100));
    setProgress(progressbar)
   }
  }
  
  useEffect(()=>{
    if(visiblePageNumber===1){
    inputref.current.focus();
    }
    
  },[])
  

  return (
    <input
      type="text"
      className="text_answer_input"
      placeholder="Type your answer here..."
      onChange={handleChange}
      ref={inputref}
      onKeyDown={handleKey}

    />
  );
};

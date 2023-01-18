import React, { useContext, useState, useEffect } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { AlphabetArray, OptionList } from "../../../utils/option";
import { navigateNext } from "../../../utils/navigate";

export const RadioInput = ({ options, question }) => {
  const [active, setActive] = useState(null);
  const { setFormValue, formValue } = useContext(FormContext);
 

  const handleClick = (e, i) => {
    setActive(i);
    setFormValue({ ...formValue, [question]: options[i] });
  };

  useEffect(()=>{
    if (formValue[question] !== undefined) {
      setActive(options.indexOf(formValue[question]));
    } else {
      setActive(null);
    }
    const handlelistner=(event)=>{
      var clickedIndex=AlphabetArray.indexOf(event.key)
      console.log(clickedIndex)
      if(clickedIndex< options.length){
        handleClick(event,clickedIndex,options[clickedIndex])

      }
      // if(event.key==='Enter'){
      //   navigateNext(visiblePageNumber,pageLength,setVisiblePageNumber)
      //   var progressbar=(Math.floor((visiblePageNumber/pageLength)*100));
      //   setProgress(progressbar)
      //  }

    }
    
    

    window.addEventListener("keydown",handlelistner)
      
 
    
    return()=>{
      window.removeEventListener("keydown",handlelistner)
    }
    }
   ,[options])


  return (
    <>
      {options.map((op, i) => {
        return (
          <button
            key={i}
            className={`radio_input_button ${active === i && "active_input"}`}
          >
            <div className="radio_input_content_wrapper">
              <span className="radio_input_button_option">
                {" "}
                {OptionList[i]}
              </span>
              <p
                onClick={(e) => {
                  handleClick(e, i, op);
                }}
              >
                {op}
              </p>
            </div>
            <CheckIcon sx={{ opacity: `${active === i ? 1 : 0}` }} />
          </button>
        );
      })}
    </>
  );
};

import React, { useContext, useState, useRef, useEffect } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { AlphabetArray, OptionList } from "../../../utils/option";
import { useOnKeyPress } from "../../../hooks/useOnKeyPress";

export const RadioInput = ({ options, question ,index}) => {
  const [active, setActive] = useState(null);
  const radioref = useRef();

  const { setFormValue, formValue,visiblePageNumber } = useContext(FormContext);

  const handleClick = ( i, op) => {
    setActive(i);
    setFormValue({ ...formValue, [question]: op });
  };
  // const handlekey = (e, i, op) => {
  //   console.log("GGG", e.key);
  //   if (e.key === "A") {
  //     setActive(0);
  //     setFormValue({ ...formValue, [question]: op });
  //   }

  //   if (e.key === "B") {
  //     setActive(1);
  //     setFormValue({ ...formValue, [question]: op });
  //   }
  // };
  // useOnKeyPress(
  //   () => {
  //     handleClick(0);
  //   },
  //   "A",
  //   options[0]
  // );
  // useOnKeyPress(() => {
  //   setActive(1);
  // }, "B");
  // useOnKeyPress(() => {
  //   setActive(0);
  // }, "a");
  // useOnKeyPress(() => {
  //   setActive(1);
  // }, "b");
  // useOnKeyPress(() => {
  //   setActive(0);
  // }, "ArrowUp");
  // useOnKeyPress(() => {
  //   setActive(1);
  // }, "ArrowDown");
  useEffect(()=>{
    const handlelistner=(event)=>{
      var clickedIndex=AlphabetArray.indexOf(event.key)
      console.log(clickedIndex)
      if(clickedIndex< options.length){
        handleClick(clickedIndex,options[clickedIndex])

      }

    }
    
    if(visiblePageNumber===index){

    window.addEventListener("keydown",handlelistner)
      
    }
    else{
      window.removeEventListener("keydown",handlelistner)
    }
    return()=>{
      window.removeEventListener("keydown",handlelistner)
    }
    }
   ,[])
  return (
    <>
      {options.map((op, i) => {
        return (
          <button
            key={i}
            className={`radio_input_button ${active === i && "active_input"}`}
            ref={radioref}
          >
            <div className="radio_input_content_wrapper">
              <span className="radio_input_button_option">
                {" "}
                {OptionList[i]}
              </span>
              <p
                onClick={(e) => {
                  handleClick(e, i);
                }}
               
                                
              >{op}</p>
            
            </div>
            <CheckIcon sx={{ opacity: `${active === i ? 1 : 0}` }} />
          </button>
        );
      })}
    </>
  );
};

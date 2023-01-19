import React, { useContext, useEffect, useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import { AlphabetArray, OptionList } from "../../../utils/option";
import FormContext from "../../../context/form/FormContext";

const MultipleChoice = ({ options, question }) => {
  const [active, setActive] = useState([]);
  // const [selectedAnswer, setSelectedAnswer] = useState([]);
  const { formValue, setFormValue } = useContext(FormContext);

  const handleClick = (e, i) => {
    console.log("index",i)
    console.log("active",active)
  
    if (active.includes(i)) {
     
      setActive(active.filter((curr) => curr !== i));
    
      setFormValue({
        ...formValue,
        [question]: formValue[question].filter((val) => val !== options[i]),
      });
      console.log("active",active)
      return;
    }
    
    
    setActive([...active, i]);
    console.log('lastactive',active);

    setFormValue({
      ...formValue,
      [question]: [...(formValue[question] || []), options[i]],
    });
  };

  useEffect(() => {
    if (formValue[question] !== undefined) {
      let newActive = [];
      options.forEach((option, index) => {
        if (formValue[question].indexOf(option) !== -1) {
          newActive.push(index);
        }
      });

      setActive(newActive);
    } else {
      setActive([]);
    }

   
  }, []);

  useEffect(()=>{
    const handlelistner=(event)=>{
      var clickedIndex=AlphabetArray.indexOf(event.key)
      console.log(clickedIndex)
      if(clickedIndex < options.length){
         
          if (active.includes(clickedIndex)) {
     
            setActive(active.filter((curr) => curr !== clickedIndex));
          
            setFormValue({
              ...formValue,
              [question]: formValue[question].filter((val) => val !== options[clickedIndex]),
            });
            console.log("active",active)
            return;
          }
          
        console.log("useeffect",active)
          active.push(clickedIndex)
       
        setFormValue({
          ...formValue,
          [question]:options.filter((value,index)=>{
           if(active.includes(index)) return value;
          } )
        }); 
        console.log(formValue)
      
      }
    }
    window.addEventListener("keydown",handlelistner)
    return()=>{
      window.removeEventListener("keydown",handlelistner)
    }
  },[active])

  return (
    <>
      {options.map((op, index) => {
        return (
          <button
            className={`radio_input_button ${
              active.includes(index) && "active_input"
            }`}
            onClick={(e) => {
              handleClick(e, index);
            }}
            key={index}
          >
            <div className="radio_input_content_wrapper">
              <span className="radio_input_button_option">
                {OptionList[index]}
              </span>
              <p>{op}</p>
            </div>
            <CheckIcon sx={{ opacity: `${active.includes(index) ? 1 : 0}` }} />
          </button>
        );
      })}
    </>
  );
};
export default MultipleChoice;

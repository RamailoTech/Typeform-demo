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
    console.log(i)
    if (active.includes(i)) {
      setActive(active.filter((curr) => curr !== i));
     console.log('active',active);
      setFormValue({
        ...formValue,
        [question]: formValue[question].filter((val) => val !== options[i]),
      });
      return;
    }
    setActive([...active, i]);

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
    const handlelistner=(event)=>{
      var clickedIndex=AlphabetArray.indexOf(event.key)
      console.log(clickedIndex)
      if(clickedIndex< options.length){
        handleClick(event,clickedIndex,options[clickedIndex])
      }
    }
    window.addEventListener("keydown",handlelistner)
    return()=>{
      window.removeEventListener("keydown",handlelistner)
    }
  }, []);

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

import React, { useContext, useState,useEffect } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { OptionList } from "../../../utils/option";
import QuestionContext from "../../../context/questions/QuestionContext";

export const RadioInput = ({ options, question }) => {
  const [active, setActive] = useState(null);
  const questions = useContext(QuestionContext)
  
  const { setFormValue, formValue ,page,setPage} = useContext(FormContext);
  const handleClick = (e, i) => {
    setFormValue({ ...formValue, [question]: e.target.innerText });
    setActive(i);
    setPage(page + 1)
  };



  return (
    <>
      {options.map((op, i) => {
        return (
          <button
            key={i}
            // onKeyDown={handleKeyDown}
            className={`radio_input_button ${active === i && "active_input"}`}
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

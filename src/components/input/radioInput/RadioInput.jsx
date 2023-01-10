import React, { useContext, useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { OptionList } from "../../../utils/option";


export const RadioInput = ({ onClick, options }) => {
  const [active, setActive] = useState(false);

  const { setFormValue, formValue } = useContext(FormContext);
  const handleClick = (e) => {
    console.log(e.target);
    setFormValue(e.target.innerText);
    setActive((prev) => !prev);
  };

  console.log({ formValue });
  return (
    <>
      {options.map((op, i) => {
        return (
          <button className={`radio_input_button ${active && "active_input"}`}>
            <div className="radio_input_content_wrapper">
              <span className="radio_input_button_option">
                {" "}
                {OptionList[i]}
              </span>
              <p onClick={handleClick}>{op}</p>
            </div>
            <CheckIcon sx={{ opacity: `${active ? 1 : 0}` }} />
          </button>
        );
      })}
    </>
  );
};

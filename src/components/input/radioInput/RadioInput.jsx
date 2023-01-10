import React, { useContext, useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";

export const RadioInput = ({ onClick, option }) => {
  const [active, setActive] = useState(false);

  const { setFormValue, formValue } = useContext(FormContext);
  const handleClick = (e) => {
    console.log(e.target);
    setFormValue(e.target.innerText);
    setActive((prev) => !prev);
  };

  console.log({ formValue });
  return (
    <button className={`radio_input_button ${active && "active_input"}`}>
      <div className="radio_input_content_wrapper">
        <span className="radio_input_button_option">A</span>
        <p onClick={handleClick}>{option}</p>
      </div>
      <CheckIcon sx={{ opacity: `${active ? 1 : 0}` }} />
    </button>
  );
};

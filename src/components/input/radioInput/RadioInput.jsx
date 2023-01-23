import React, { useContext, useState, useEffect } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { AlphabetArray } from "../../../utils/option";

export const RadioInput = ({ options, question }) => {
  const [active, setActive] = useState(null);
  const { setFormValue, formValue } = useContext(FormContext);

  const handleClick = (e, i) => {
    setActive(i);

    setFormValue({ ...formValue, [question.name]: options[i] });
  };

  useEffect(() => {
    if (formValue[question.name] !== undefined) {
      setActive(options.indexOf(formValue[question.name]));
    } else {
      setActive(null);
    }
    const handlelistner = (event) => {
      var clickedIndex = AlphabetArray.indexOf(event.key);
      if (clickedIndex < options.length) {
        setActive(clickedIndex);
        setFormValue({ ...formValue, [question.name]: options[clickedIndex] });
      }
      if (event.key === "Enter") {
        handleClick(event, active);
      }
    };

    window.addEventListener("keydown", handlelistner);

    return () => {
      window.removeEventListener("keydown", handlelistner);
    };
  }, [options, active]);

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
                {AlphabetArray[i].toUpperCase()}
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

import React, { useContext, useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import { OptionList } from "../../../utils/option";
import FormContext from "../../../context/form/FormContext";

const MultipleChoice = ({ onClick, options }) => {
  const [active, setActive] = useState([]);
  const { setFormValue } = useContext(FormContext);

  const handleClick = (e, i) => {
    setFormValue(e.target.innerText);
    if (active.includes(i)) {
      return setActive(active.filter((curr) => curr !== i));
    }
    setActive([...active, i]);
  };

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

import React, { useContext, useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { OptionList } from "../../../utils/option";

export const RadioInput = ({ options, question }) => {
  const [active, setActive] = useState(null);

  const { setFormValue, formValue, page, setPage } = useContext(FormContext);
  const handleClick = (e, i) => {
    setActive(i);
    setFormValue({ ...formValue, [question]: e.target.innerText });
  };

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

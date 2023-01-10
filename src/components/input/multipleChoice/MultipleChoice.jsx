import React, { useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import { OptionList } from "../../../utils";

export const MultipleChoice = ({ onClick, options }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`radio_input_button ${active && "active_input"}`}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      {options.map((op, index) => {
        return (
          <div className="radio_input_content_wrapper">
            <p>
              <span className="radio_input_button_option">
                {OptionList[index]}
              </span>
              {op}
            </p>
            <CheckIcon sx={{ opacity: `${active ? 1 : 0}` }} />
          </div>
        );
      })}
    </button>
  );
};

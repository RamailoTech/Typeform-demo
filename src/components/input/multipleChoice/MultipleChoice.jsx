import React, { useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";

 const MulitipleChoice = ({ onClick, options }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`radio_input_button ${active && "active_input"}`}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div className="radio_input_content_wrapper">
        <p>
          <span className="radio_input_button_option">A</span>Terrific!
        </p>
        <CheckIcon sx={{ opacity: `${active ? 1 : 0}` }} />
      </div>
    </button>
  );
};
export default MulitipleChoice;
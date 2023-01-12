import React, { useContext, useState,useRef,useEffect} from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { OptionList } from "../../../utils/option";

export const RadioInput = ({ options, question }) => {
  const [active, setActive] = useState(null);
  const radioref=useRef();
  const { setFormValue, formValue } = useContext(FormContext);
  const handleClick = (e, i) => {
    setActive(i);
    setFormValue({ ...formValue, [question]: e.target.innerText });
  };
  // useEffect(()=>{
  //   radioref.current.focus();
  //   return(()=>{
  //     radioref.current.blur();
  //   })
  // },[])
  return (
    <>
      {options.map((op, i) => {
        return (
          <button
            key={i}
            className={`radio_input_button ${active === i && "active_input"}`}
            ref={radioref}
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

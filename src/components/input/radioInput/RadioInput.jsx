import React, { useContext, useState, useEffect } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../../context/form/FormContext";
import { OptionList, AlphabetArray } from "../../../utils/option";
import { navigateNext } from "../../../utils/navigate";

export const RadioInput = ({ options, question, index }) => {
  const [active, setActive] = useState(null);

  const {
    formValue,
    setFormValue,
    visiblePageNumber,
    pageLength,
    setVisiblePageNumber,
    setProgress,
    globalIndex,
  } = useContext(FormContext);

  console.log("setGlobalIndex", globalIndex);
  const handleClick = async (e, i) => {
    console.log("hii");
    setActive(i);
    console.log(i, question);
    let value = await setFormValue(() => {
      console.log("inside", question, options[i]);

      return { ...formValue, [question]: options[i] };
    });
    if (!value) return null;
    console.log(formValue);
  };
  useEffect(() => {
    const handlelistner = (event) => {
      var clickedIndex = AlphabetArray.indexOf(event.key);
      console.log("index", index);

      if (visiblePageNumber === globalIndex) {
        if (clickedIndex < options.length) {
          console.log("option", options.length);
          handleClick(event, clickedIndex, options[clickedIndex]);
        }
        if (event.key === "Enter") {
          setFormValue({ ...formValue, [question]: options[clickedIndex] });
          navigateNext(visiblePageNumber, pageLength, setVisiblePageNumber);
          var progressbar = Math.floor((visiblePageNumber / pageLength) * 100);
          setProgress(progressbar);
        }
      }
    };

    if (visiblePageNumber === globalIndex) {
      window.addEventListener("keydown", handlelistner);
    } else {
      window.removeEventListener("keydown", handlelistner);
    }
    return () => {
      window.removeEventListener("keydown", handlelistner);
    };
  }, [globalIndex, question]);

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

import React, { useContext, useEffect } from "react";
import "../input.css";
import FormContext from "../../../context/form/FormContext";
import { navigateNext } from "../../../utils/navigate";

export const TextInput = ({ question, inputref }) => {
  const {
    formValue,
    setFormValue,
    visiblePageNumber,
    pageLength,
    setVisiblePageNumber,
    setProgress,
  } = useContext(FormContext);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [question.name]: e.target.value });
  };
  useEffect(() => {
    const handlelistner = (event) => {
      if (event.key === "Enter") {
        navigateNext(visiblePageNumber, pageLength, setVisiblePageNumber);
        var progressbar = Math.floor((visiblePageNumber / pageLength) * 100);
        setProgress(progressbar);
      }
    };
    document.addEventListener("keydown", handlelistner);
    return () => {
      document.removeEventListener("keydown", handlelistner);
    };
  });

  console.log("formValue", formValue);

  return (
    <input
      ref={inputref}
      type="text"
      className="text_answer_input"
      placeholder="Type your answer here..."
      onChange={handleChange}
      value={formValue[question.name] ? formValue[question.name] : ""}
    />
  );
};

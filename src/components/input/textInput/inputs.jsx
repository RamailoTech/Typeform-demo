import React, { useContext, useRef } from "react";
import "../input.css";
import FormContext from "../../../context/form/FormContext";

export const TextInput = ({ question }) => {
  const { formValue, setFormValue } = useContext(FormContext);
  const ref = useRef();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [question]: e.target.value });
  };
  return (
    <input
      ref={ref}
      type="text"
      className="text_answer_input"
      placeholder="Type your answer here..."
      onChange={handleChange}
    />
  );
};

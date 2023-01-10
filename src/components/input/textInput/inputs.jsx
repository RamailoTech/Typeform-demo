import React, { useContext } from "react";
import "../input.css";
import FormContext from "../../../context/form/FormContext";

export const TextInput = ({ question }) => {
  const { formValue, setFormValue } = useContext(FormContext);

  const handleChange = (e) => {
    setFormValue([...formValue, { question, answer: e.target.value }]);
  };
  return (
    <input
      type="text"
      className="text_answer_input"
      placeholder="Type your answer here..."
      onChange={handleChange}
    />
  );
};

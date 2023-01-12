import FormContext from "./FormContext";
import React, { useState } from "react";

const FormState = (props) => {
  const [page, setPage] = useState(0);
  const [formValue, setFormValue] = useState({});
  const [progress, setProgress] = useState(0);
  return (
    <FormContext.Provider value={{ page, setPage, formValue, setFormValue,progress, setProgress }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;

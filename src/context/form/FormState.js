import FormContext from "./FormContext";
import React, { useState } from "react";

const FormState = (props) => {
  const [page, setPage] = useState(0);
  const [formValue, setFormValue] = useState({});
  return (
    <FormContext.Provider value={{ page, setPage, formValue, setFormValue }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;

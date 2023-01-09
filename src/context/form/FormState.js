import formContext from "./FormContext";
import React, { useState } from "react";

const FormState = (props) => {
  const [page, setPage] = useState(0);
  const [formValue, setFormValue] = setState([{}]);
  return (
    <formContext.Provider value={{ page, setPage, formValue, setFormValue }}>
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;

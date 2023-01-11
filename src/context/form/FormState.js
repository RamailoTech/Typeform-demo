import FormContext from "./FormContext";
import React, { useState } from "react";

const FormState = (props) => {
  const [page, setPage] = useState(0);
  //to show question numbers
  const [visiblePageNumber, setVisiblePageNumber] = useState(0);
  //conditionally rendered question changes page length
  const [pageLength, setPageLength] = useState(0);

  const [formValue, setFormValue] = useState({});
  return (
    <FormContext.Provider
      value={{
        page,
        setPage,
        formValue,
        setFormValue,
        pageLength,
        setPageLength,
        visiblePageNumber,
        setVisiblePageNumber,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;

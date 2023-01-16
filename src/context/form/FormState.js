import FormContext from "./FormContext";
import React, { useState } from "react";

const FormState = (props) => {
  //to show question numbers
  const [visiblePageNumber, setVisiblePageNumber] = useState(1);
  const [globalIndex, setGlobalIndex] = useState();
  //conditionally rendered question changes page length
  const [pageLength, setPageLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [formValue, setFormValue] = useState({});
  return (
    <FormContext.Provider
      value={{
        globalIndex,
        setGlobalIndex,
        formValue,
        setFormValue,
        pageLength,
        setPageLength,
        visiblePageNumber,
        setVisiblePageNumber,
        progress,
        setProgress,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;

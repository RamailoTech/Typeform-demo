import FormContext from "./FormContext";
import React, { useState } from "react";

const FormState = (props) => {
  //to show question numbers
  const [visiblePageNumber, setVisiblePageNumber] = useState(1);
  //conditionally rendered question changes page length
  const [pageLength, setPageLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [formValue, setFormValue] = useState({});
  const [direction, setDirection] = useState(0);
  const [isComponentVisible, setIsComponentVisible] =useState(false);
  const navigateNext = () => {
    if (visiblePageNumber < pageLength) {
      setVisiblePageNumber(visiblePageNumber + 1);
      setDirection(1);
      var progressbar = Math.floor((visiblePageNumber / pageLength) * 100);
      setProgress(progressbar);
    }
  };
  const navigatePrev = () => {
    if (visiblePageNumber > 0) {
      setVisiblePageNumber(visiblePageNumber - 1);
      setDirection(-1);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formValue,
        setFormValue,
        pageLength,
        setPageLength,
        visiblePageNumber,
        setVisiblePageNumber,
        direction,
        setDirection,
        navigateNext,
        navigatePrev,
        setProgress,
        progress,
        isComponentVisible,
        setIsComponentVisible
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;

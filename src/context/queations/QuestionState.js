import React from "react";
import questionContext from "./QuestionContext";

const QuestionState = (props) => {
  const questions = [{}];

  return (
    <questionContext.Provider value={questions}>
      {props.children}
    </questionContext.Provider>
  );
};

export default QuestionState;

import React from "react";
import QuestionContext from "./QuestionContext";

const QuestionState = (props) => {
  const questions = [
    {
     id: 0,
      question: "string here",
      answer: {
        type: "radio",
        options: ["option1", "option2"],
      }
    },
    {
      id: 0,
       question: "string here",
       answer: {
         type: "radio",
         options: ["option1", "option2"],
       }
     },
     {
      id: 0,
       question: "string here",
       answer: {
         type: "radio",
         options: ["option1", "option2"],
       }
     }
];

  return (
    <QuestionContext.Provider value={questions}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;

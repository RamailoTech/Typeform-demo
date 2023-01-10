import React from "react";
import QuestionContext from "./QuestionContext";

const QuestionState = (props) => {
  const questions = [
    {
     id: 0,
      question: "Hello, what's your name?",
      answer: {
        type: "text",
        
      }
    },
    {
      id: 1,
       question: "Gender",
       answer: {
         type: "radio",
         options: ["Male", "Female"],
       }
     },
     {
      id: 2,
       question: "Multiple Choice Question",
       answer: {
         type: "multiple_choice",
         options: ["option1", "option2","option3","option4"],
       }
     },
     {
      id: 3,
       question: "DropDown",
       answer: {
         type: "dropdown",
         options: ["option1", "option2","option3","option4"],
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

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
       question: "Select your gender",
       answer: {
         type: "radio",
         options: ["Male", "Female"],
       }
     },
     {
      id: 2,
       question: "Which is the best way to eat healthier",
       answer: {
         type: "multiple_choice",
         options: ["Vegan diet", "Protein-rich food","Balanced diet","Only fresh fruits"],
       }
     },
     {
      id: 3,
       question: "Select your favourite color",
       answer: {
         type: "dropdown",
         options: ["Blue", "Pink","Red","White"],
       }
     },
     {
      id: 4,
       question: "Enter your birth date",
       answer: {
         type: "dateInput",  
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

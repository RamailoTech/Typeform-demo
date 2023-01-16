import React from "react";
import QuestionContext from "./QuestionContext";

const QuestionState = (props) => {
  const questions = [
    {
      id: 0,
      question: "Hello, what's your name?",
      answer: {
        type: "text",
      },
    },
    {
      id: 1,
      question: "Select your gender",
      answer: {
        type: "radio",
        options: ["Male", "Female"],
        children: {
          Male: [
            {
              id: 6,
              question: "What's you thinking?",
              answer: {
                type: "text",
              },
            },
            {
              id: 9,
              question: "Your  favourite web-series?",
              answer: {
                type: "text",
              },
            },
          ],
          // Female: [
          //   {
          //     id: 7,
          //     question: "whats on your mind?",
          //     answer: {
          //       type: "text",
          //     },
          //   },
          //   {
          //     id: 8,
          //     question: "Your favourite play?",
          //     answer: {
          //       type: "text",
          //     },
          //   },
          // ],
        },
      },
    },
    {
      id: 2,
      question: "What is your favourite game?",
      answer: {
        type: "radio",
        options: ["Cricket", "Football"],
        children: {
          Cricket: [
            {
              id: 6,
              question: "Your favourite Crickter?",
              answer: {
                type: "text",
              },
            },
            {
              id: 9,
              question: "Your least favourite Crickter?",
              answer: {
                type: "text",
              },
            },
          ],
          Football: [
            {
              id: 7,
              question: "Your favourite Footballer?",
              answer: {
                type: "text",
              },
            },
            {
              id: 8,
              question: "Your least favourite Footballer?",
              answer: {
                type: "text",
              },
            },
          ],
        },
      },
    },

    {
      id: 3,
      question: "Which is the best way to eat healthier",
      answer: {
        type: "multiple_choice",
        options: [
          "Vegan diet",
          "Protein-rich food",
          "Balanced diet",
          "Only fresh fruits",
        ],
      },
    },
    {
      id: 4,
      question: "Select your favourite color",
      answer: {
        type: "dropdown",
        options: ["Blue", "Pink", "Red", "White"],
      },
    },
    {
      id: 5,
      question: "Enter your birth date",
      answer: {
        type: "dateInput",
      },
    },
  ];

  return (
    <QuestionContext.Provider value={questions}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;

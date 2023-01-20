import React from "react";
import QuestionContext from "./QuestionContext";

const QuestionState = (props) => {
  const questions = [
    {
      id: 0,
      name: "yourName",
      question: "Hello, what's your name?",
      answer: {
        type: "text",
      },
    },
    {
      id: 1,
      name: "SelectYourGender",
      question: "Select your gender",
      answer: {
        type: "radio",
        options: ["Male", "Female"],
      },
    },
    {
      id: 6,
      name: "onYourMind",
      question: "What's on your mind?",
      conditions: [
        {
          valueOfField: "SelectYourGender",
          operation: "eq",
          value: "Male",
        },
      ],
      answer: {
        type: "text",
      },
    },
    {
      id: 9,
      name: "favouriteWebSeries",
      question: "Your  favourite web-series?",
      conditions: [
        {
          valueOfField: "SelectYourGender",
          operation: "eq",
          value: "Male",
        },
      ],
      answer: {
        type: "text",
      },
    },
    {
      id: 8,
      name: "favouritePlay",
      question: "Your favourite play?",
      conditions: [
        {
          valueOfField: "SelectYourGender",
          operation: "eq",
          value: "Female",
        },
      ],
      answer: {
        type: "text",
      },
    },
    {
      id: 2,
      name: "favouriteGame",
      question: "What is your favourite game?",
      answer: {
        type: "radio",
        options: ["Cricket", "Football"],
      },
    },
    {
      id: 6,
      name: "favouriteCrickter",
      question: "Your favourite Crickter?",
      conditions: [
        {
          valueOfField: "favouriteGame",
          operation: "eq",
          value: "Cricket",
        },
      ],
      answer: {
        type: "text",
      },
    },
    {
      name: "leastFavouriteCrickter",
      id: 9,
      question: "Your least favourite Crickter?",
      conditions: [
        {
          valueOfField: "favouriteGame",
          operation: "eq",
          value: "Cricket",
        },
      ],
      answer: {
        type: "text",
      },
    },
    {
      id: 7,
      name: "favouriteFootballer",
      question: "Your favourite Footballer?",
      answer: {
        type: "text",
      },
      conditions: [
        {
          valueOfField: "favouriteGame",
          operation: "eq",
          value: "Football",
        },
      ],
    },

    {
      id: 3,
      name: "bestWayToEatHealthier",
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
      name: "foodsYouLike",
      answer: {
        type: "multipleChoice",
        options: ["pizza", "burger", "pasta"],
      },
      question: "What foods do you like?",

      conditions: [
        {
          valueOfField: "bestWayToEatHealthier",
          operetion: "in",
          value: ["Vegan diet", "Protein-rich food"],
        },
      ],
    },
    {
      id: 4,
      name: "favouriteColor",
      question: "Select your favourite color",
      answer: {
        type: "dropdown",
        options: ["Blue", "Pink", "Red", "White"],
      },
    },
    {
      id: 5,
      name: "yourBirthdate",
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

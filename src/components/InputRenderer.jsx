import React from "react";
import { TextInput } from "./input/textInput/inputs";
import { RadioInput } from "./input/radioInput/RadioInput";
import MultipleChoice from "./input/multipleChoice/MultipleChoice";
import Autocomplete from "./input/autoComplete/autoCompleteInput";
import { DateInput } from "./input/dateInput";

const InputRenderer = ({ question, inputref }) => {
  console.log("InputRenderer", question);
  switch (question.answer.type) {
    case "text":
      return <TextInput question={question} inputref={inputref} />;
    case "radio":
      return (
        <RadioInput question={question} options={question?.answer?.options} />
      );

    case "dropdown":
      return (
        <Autocomplete
          question={question}
          options={question?.answer?.options}
          inputref={inputref}
        />
      );
    case "dateInput":
      return <DateInput question={question} inputref={inputref} />;

    case "multipleChoice":
      return (
        <MultipleChoice
          options={question?.answer?.options}
          question={question}
        />
      );

    default:
      return (
        <p>
          {question.title} - {question.type} - no renderer
        </p>
      );
  }
};

export default InputRenderer;

// {question?.answer?.type === "text" ? (
//     <TextInput question={question} inputref={inputref} />
//   ) : question?.answer?.type === "radio" ? (
//     <RadioInput
//       question={question}
//       options={question?.answer?.options}
//     />
//   ) : question?.answer?.type === "dropdown" ? (
//     <Autocomplete
//       question={question}
//       options={question?.answer?.options}
//       inputref={inputref}
//     />
//   ) : question?.answer?.type === "dateInput" ? (
//     <DateInput question={question} inputref={inputref} />
//   ) : (
//     <MultipleChoice
//       options={question?.answer?.options}
//       question={question}
//     />
//   )}

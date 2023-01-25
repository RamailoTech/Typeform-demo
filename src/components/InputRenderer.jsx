import React, { useCallback } from "react";
import { TextInput } from "./input/textInput/inputs";
import { RadioInput } from "./input/radioInput/RadioInput";
import MultipleChoice from "./input/multipleChoice/MultipleChoice";
import Autocomplete from "./input/autoComplete/autoCompleteInput";
import { DateInput } from "./input/dateInput";

const InputRenderer = ({ question }) => {
  //   console.log("InputRenderer", question);

  const inputRef = useCallback((node) => {
    if (node) {
      node.focus();
    }
  }, []);

  switch (question.answer.type) {
    case "text":
      return <TextInput question={question} inputref={inputRef} />;
    case "radio":
      return (
        <RadioInput question={question} options={question?.answer?.options} />
      );

    case "dropdown":
      return (
        <Autocomplete
          question={question}
          options={question?.answer?.options}
          inputref={inputRef}
        />
      );
    case "dateInput":
      return <DateInput question={question} inputref={inputRef} />;

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

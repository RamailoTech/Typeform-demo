import QuestionContext from "../context/questions/QuestionContext";
import { useContext, useEffect } from "react";
import FormContext from "../context/form/FormContext";
export const CheckQuestion = (question) => {
  const questions = useContext(QuestionContext);
  const { formValue, visiblePageNumber, setVisiblePageNumber } =
    useContext(FormContext);

  // question is not a sub question
  if (question.parent === undefined) {
    return question;
  }
  // question is a sub question and  is  selected

  if (
    question.parent !== undefined &&
    formValue[question.parentQuestion] === question.parent
  ) {
    return question;
  }
  // question is a sub question and  is not  selected
  if (
    question.parent !== undefined &
    formValue[question.parentQuestion] !== question.parent
  ) {
    console.log( question.parent)
    // setVisiblePageNumber((prev) => prev + 1);
    return CheckQuestion(questions[visiblePageNumber]);
  }
};

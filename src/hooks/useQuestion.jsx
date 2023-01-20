import { useContext, useMemo } from "react";
import FormContext from "../context/form/FormContext";
import QuestionContext from "../context/questions/QuestionContext";
import { filterQuestions } from "../utils/helper";

export const useFilteredQuestions = () => {
  const questions = useContext(QuestionContext);
  const { formValue } = useContext(FormContext);

  const filteredQuestions = useMemo(() => {
    return filterQuestions(questions, formValue);
  }, [questions, formValue]);

  return filteredQuestions;
};

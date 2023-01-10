import React,{useContext} from "react";
import QuestionContext from "../context/questions/QuestionContext";
import { Formpage } from "../components/Formpage";
import "../assets/styles/form.css";
export const Form = () => {
  const questions = useContext(QuestionContext);

  return (
    <>
      {questions.map((items,index) => {
        return <Formpage items={items} pageno={index} />;
      })}
    </>
  );
};

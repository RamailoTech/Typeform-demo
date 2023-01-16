import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FormState from "./context/form/FormState";
import QuestionState from "./context/questions/QuestionState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FormState>
    <QuestionState>
      <App />
    </QuestionState>
  </FormState>
);

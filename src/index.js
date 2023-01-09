import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FormState from "./context/form/FormState";
import QuestionState from "./context/queations/QuestionState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormState>
      <QuestionState>
        <App />
      </QuestionState>
    </FormState>
  </React.StrictMode>
);

import React, { useState, useContext, useEffect } from "react";
import "./dateInput.css";
import FormContext from "../../../context/form/FormContext";
import Alert from "@mui/material/Alert";

export const DateInput = ({ question }) => {
  const { formValue, setFormValue } = useContext(FormContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "month") {
      setErrorMessage(null);
      if (parseInt(value) > 12) {
        setErrorMessage(
          "That date isn't valid. Check the month and day aren't reversed."
        );
        //  setDate({ ...date, [name]: 12 });
      } else if (parseInt(value) === 0) {
        setDate({ ...date, [name]: 1 });
      } else {
        setDate({ ...date, [name]: value });
      }
    }
    if (name === "day") {
      setErrorMessage(null);
      if (parseInt(value) > 31) {
        setErrorMessage(
          "That date isn't valid. Check the month and day aren't reversed."
        );
        // setDate({ ...date, [name]: 31 });
      } else if (parseInt(value) === 0) {
        setDate({ ...date, [name]: 1 });
      } else {
        setDate({ ...date, [name]: value });
      }
    }
    if (name === "year") {
      setErrorMessage(null);
      if (value.length > 4) {
        setDate({ ...date, [name]: new Date().getFullYear() });
      } else if (value.length < 4) {
        setErrorMessage("Enter all 4 digits for a year");
        setDate({ ...date, [name]: value });
      } else {
        setDate({ ...date, [name]: value });
      }
    }
  };
  useEffect(() => {
    if (date.day && date.month && date.year) {
      let dates = `${date.day}/${date.month}/${date.year}`;
      setFormValue({ ...formValue, [question]: dates });
    }
  }, [date.day, date.month, date.year]);
  return (
    <div className="date_input_wrapper">
      <input
        type="number"
        name="month"
        className="date_input month"
        placeholder="MM"
        min={0}
        max={12}
        value={date.month}
        onChange={handleChange}
      />
      /
      <input
        name="day"
        type="number"
        className="date_input day"
        placeholder="DD"
        value={date.day}
        min={1}
        onChange={handleChange}
      />
      /
      <input
        name="year"
        className="date_input year"
        placeholder="YYYY"
        type="number"
        value={date.year}
        onChange={handleChange}
      />
      {!errorMessage ? null : <Alert severity="error">{errorMessage}</Alert>}
    </div>
  );
};

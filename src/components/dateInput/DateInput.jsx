import React, { useState } from "react";
import "./dateInput.css";

export const DateInput = () => {
  const [error, setError] = useState("");
  const [date, setDate] = useState({
    day: null,
    month: null,
    year: null,
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "month") {
      console.log(name);
      console.log(value.length);

      if (value.length > 2) {
        return console.log(value.length);
      }
      //   setDate({ ...date, name: value });
    }
  };
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
        min={0}
        onChange={handleChange}
      />
      /
      <input
        name="year"
        className="date_input year"
        placeholder="YYYY"
        type="number"
        min={0}
        onChange={handleChange}
      />
    </div>
  );
};

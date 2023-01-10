import React, { useState } from "react";
import "./dateInput.css";

export const DateInput = () => {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "month") {
      ;

      if (parseInt(value) > 12) {
        setDate({ ...date, [name]: 12 });
      } else if (parseInt(value) === 0) {
        setDate({ ...date, [name]: 1 });
      } else {
        setDate({ ...date, [name]: value });
      }
    }
    if (name === "day") {
      if (parseInt(value) > 31) {
        setDate({ ...date, [name]: 31 });
      } else if (parseInt(value) === 0) {
        setDate({ ...date, [name]: 1 });
      } else {
        setDate({ ...date, [name]: value });
      }
    }
    if (name === "year") {
      if (value.length > 4) {
        setDate({ ...date, [name]: new Date().getFullYear() });
      } else {
        setDate({ ...date, [name]: value });
      }
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
    </div>
  );
};

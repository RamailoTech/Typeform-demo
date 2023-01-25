import React, { useContext, useEffect, useState } from "react";
import "../input.css";
import CheckIcon from "@mui/icons-material/Check";
import { AlphabetArray } from "../../../utils/option";
import FormContext from "../../../context/form/FormContext";

const MultipleChoice = ({ options, question }) => {
  const [active, setActive] = useState([]);
  // const [selectedAnswer, setSelectedAnswer] = useState([]);
  const { formValue, setFormValue } = useContext(FormContext);

  const handleClick = (e, i) => {
    if (active.includes(i)) {
      setActive(active.filter((curr) => curr !== i));

      setFormValue((prev) => {
        return {
          ...prev,
          [question?.name]: prev[question?.name].filter(
            (val) => val !== options[i]
          ),
        };
      });
      return;
    }

    setActive([...active, i]);

    setFormValue({
      ...formValue,
      [question?.name]: [...(formValue[question?.name] || []), options[i]],
    });
  };

  useEffect(() => {
    if (formValue[question?.name] !== undefined) {
      let newActive = [];
      options.forEach((option, index) => {
        if (formValue[question?.name].indexOf(option) !== -1) {
          newActive.push(index);
        }
      });

      setActive(newActive);
    } else {
      setActive([]);
    }
  }, [formValue, options, question?.name]);

  useEffect(() => {
    const handlelistner = (event) => {
      var clickedIndex = AlphabetArray.indexOf(event.key);
      if (clickedIndex < options?.length) {
        if (active.includes(clickedIndex)) {
          setActive(active.filter((curr) => curr !== clickedIndex));

          //prev

          setFormValue((prev) => {
            return {
              ...prev,
              [question?.name]: prev[question?.name].filter(
                (val) => val !== options[clickedIndex]
              ),
            };
          });
          return;
        }

        active.push(clickedIndex);

        setFormValue((prev) => {
          return {
            ...prev,
            [question?.name]: options.filter((value, index) =>
              active.includes(index)
            ),
          };
        });
      }
    };
    window.addEventListener("keydown", handlelistner);
    return () => {
      window.removeEventListener("keydown", handlelistner);
    };
  }, [active, options, question?.name, setFormValue]);

  return (
    <>
      {options?.map((op, index) => {
        return (
          <button
            className={`radio_input_button ${
              active.includes(index) && "active_input"
            }`}
            onClick={(e) => {
              handleClick(e, index);
            }}
            key={index}
          >
            <div className="radio_input_content_wrapper">
              <span className="radio_input_button_option">
                {AlphabetArray[index].toUpperCase()}
              </span>
              <p>{op}</p>
            </div>
            <CheckIcon sx={{ opacity: `${active.includes(index) ? 1 : 0}` }} />
          </button>
        );
      })}
    </>
  );
};
export default MultipleChoice;

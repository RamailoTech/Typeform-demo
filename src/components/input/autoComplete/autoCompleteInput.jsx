import React, { useState, useContext, useEffect, useCallback } from "react";
import "./autocompleteInput.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import useComponentVisible from "../../../hooks/hook";
import FormContext from "../../../context/form/FormContext";
const AutoCompleteInput = ({ options, question, inputref }) => {
  const { formValue, setFormValue } = useContext(FormContext);

  const [value, setValue] = useState("");
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleChange = () => {
    setIsComponentVisible(true);
    let curr = inputref.current.value;
    setValue(() => curr);
  };
  useEffect(() => {
    if (options.includes(value)) {
      setFormValue((prev) => {
        return { ...prev, [question.name]: value };
      });
    } else {
      setFormValue((prev) => {
        let { [question.name]: name, ...others } = prev;
        return { ...others };
      });
    }
  }, [options, question.name, setFormValue, value]);

  useEffect(() => {
    if (formValue[question.name] !== undefined) {
      setValue(formValue[question.name]);
    }
  }, [formValue, question.name]);

  return (
    <>
      <div ref={ref}>
        <div
          className="autocomplete_input_wrapper"
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        >
          <input
            onChange={handleChange}
            ref={inputref}
            value={value || ""}
            type="text"
            className="autocomplete_text_answer_input"
            placeholder="Type or Select an option..."
          />

          {isComponentVisible ? (
            <ExpandLessIcon
              onClick={() => {
                setIsComponentVisible(false);
              }}
              className="expand_icon"
            />
          ) : (
            <ExpandMoreIcon
              onClick={() => {
                setIsComponentVisible(true);
              }}
              className="expand_icon"
            />
          )}
        </div>
        {isComponentVisible && (
          <Option
            option={options.filter((op) =>
              op.toLowerCase().includes(value ? value.toLowerCase() : "")
            )}
            setValue={setValue}
            value={value}
          />
        )}
      </div>
    </>
  );
};

export default AutoCompleteInput;

export const Option = ({ option, setValue, value }) => {
  const [active, setActive] = useState(null);
  const { ref, setIsComponentVisible } = useComponentVisible(false);
  const handleOptionClick = useCallback(
    (e, index) => {
      setValue(option[index]);
      setIsComponentVisible(false);
    },
    [option, setIsComponentVisible, setValue]
  );

  useEffect(() => {
    const handlelistner = (event) => {
      if (event.key === "ArrowDown") {
        if (active < option.length) {
          setActive((prev) => {
            if (prev === null || prev === option.length - 1) return 0;
            return prev + 1;
          });
        }
      }

      if (event.key === "ArrowUp") {
        if (active < option.length) {
          setActive((prev) => {
            if (prev === 0 || prev === null) return option.length - 1;
            return prev - 1;
          });
        }
      }

      if (event.key === "Enter") {
        handleOptionClick(event, active);
      }
    };
    window.addEventListener("keydown", handlelistner);
    return () => {
      window.removeEventListener("keydown", handlelistner);
    };
  }, [active, handleOptionClick, option.length, value]);

  return (
    <div ref={ref} className="option_wrapper">
      {option.map((op, index) => {
        return (
          <span
            ref={ref}
            className={`option_text ${active === index && "active_input"}`}
            value={op}
            key={index}
            onClick={(e) => {
              handleOptionClick(e, index);
            }}
          >
            {op}
          </span>
        );
      })}
    </div>
  );
};

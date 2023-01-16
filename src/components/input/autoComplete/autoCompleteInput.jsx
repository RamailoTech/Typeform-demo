import React, { useRef, useState, useContext, useEffect } from "react";
import "./autocompleteInput.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import useComponentVisible from "../../../hooks/hook";
import FormContext from "../../../context/form/FormContext";
const AutoCompleteInput = ({ options, question }) => {
  const { formValue, setFormValue, visiblePageNumber, setVisiblePageNumber } =
    useContext(FormContext);

  const inputRef = useRef();
  const [value, setValue] = useState("");
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleChange = () => {
    setIsComponentVisible(true);
    let curr = inputRef.current.value;
    setValue(() => curr);
  };
  useEffect(() => {
    if (options.includes(value)) {
      setFormValue({ ...formValue, [question]: value });
      setVisiblePageNumber(visiblePageNumber + 1);
    }
  }, [value, question]);

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
            ref={inputRef}
            value={value}
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
              op.toLowerCase().includes(value.toLowerCase())
            )}
            setValue={setValue}
          />
        )}
      </div>
    </>
  );
};

export default AutoCompleteInput;

export const Option = ({ option, setValue }) => {
  const { ref, setIsComponentVisible } = useComponentVisible(false);
  const handleOptionClick = (e) => {
    setValue(e.target.innerHTML);
    setIsComponentVisible(false);
  };
  return (
    <div ref={ref} className="option_wrapper">
      {option.map((op, index) => {
        return (
          <span
            ref={ref}
            className="option_text"
            value={op}
            key={index}
            onClick={handleOptionClick}
          >
            {op}
          </span>
        );
      })}
    </div>
  );
};

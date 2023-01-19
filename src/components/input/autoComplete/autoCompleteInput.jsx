import React, { useRef, useState, useContext, useEffect } from "react";
import "./autocompleteInput.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import useComponentVisible from "../../../hooks/hook";
import FormContext from "../../../context/form/FormContext";
const AutoCompleteInput = ({ options, question,inputref }) => {
  const { formValue, setFormValue, visiblePageNumber, setVisiblePageNumber } =
    useContext(FormContext);


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
      setFormValue({ ...formValue, [question]: value });  
    }
  }, [value, question]);


  useEffect(()=>{
    if(formValue[question]!==undefined){
        setValue(formValue[question])
    }
  },[])

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
  const [active, setActive] = useState(0);
  const { ref, setIsComponentVisible } = useComponentVisible(false);
  const handleOptionClick = (e,index) => {
    setValue(option[index]);
    setIsComponentVisible(false);
  };

  useEffect(()=>{
    const handlelistner=(event)=>{
      
    if(event.key==='ArrowDown'){
     
      if(active < option.length){
       setActive(active+1); 
        }
        if(active >= option.length){
        setActive(0)}
      }

      if(event.key==='ArrowUp'){
     
        if(active < option.length){
         setActive(active-1); 
          }
          if(active >= option.length){
          setActive(0)}
        }

      if(event.key==="Enter"){
        handleOptionClick(event,active);
      }

    }
    window.addEventListener("keydown",handlelistner)
    return()=>{
      window.removeEventListener("keydown",handlelistner)
    }
  },[active])
  
  return (
    <div ref={ref} className="option_wrapper">
      {option.map((op, index) => {
        console.log(index,active)
        return (
          <span
            ref={ref}
           
            className={`option_text ${active === index && "active_input"}`}
            value={op}
            key={index}
            onClick={(e)=>{handleOptionClick(e,index)}}
           
          >
            {op}
          </span>
        );
      })}
    </div>
  );
};

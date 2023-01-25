import {  useEffect, useRef, useContext } from "react";
import FormContext from "../context/form/FormContext";

export default function useComponentVisible() {
  const {
    setIsComponentVisible,
    isComponentVisible
  } = useContext(FormContext);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (!ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}

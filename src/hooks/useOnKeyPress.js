import { useEffect, useContext } from "react";
import FormContext from "../context/form/FormContext";
export const useOnKeyPress = (
  callback,
  targetKey,
  question,
  options,
  index
) => {
  const { setFormValue, formValue } = useContext(FormContext);

  useEffect(() => {
    const keyPressHandler = (event) => {
      if (event.key === targetKey) {
        callback();
        console.log(event);
        setFormValue({ ...formValue, [question]: options[index] });
      }
    };
    window.addEventListener("keydown", keyPressHandler);

    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [callback, targetKey]);
};

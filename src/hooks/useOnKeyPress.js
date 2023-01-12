import { useEffect } from "react";
export const useOnKeyPress = (callback, targetKey) => {
  useEffect(() => {
    const keyPressHandler = (event) => {
      if (event.key === targetKey) {
        callback();
      }
    };
    window.addEventListener("keydowm", keyPressHandler);

    return () => {
      window.removeEventListener("keydowm", keyPressHandler);
    };
  }, [callback, targetKey]);
};

import React, { useRef, useEffect } from "react";

const Input = ({ isLast }) => {
  const lastInput = useRef(null);
  useEffect(() => {
    console.log("lastInput", lastInput);
    lastInput.current.focus();
  }, []);

  return (
    <>
      {isLast ? <input type="text" ref={lastInput} /> : <input type="text" />}
      <br />
    </>
  );
};

export default Input;

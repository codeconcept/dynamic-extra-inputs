import React, { useRef, useEffect, useState } from "react";

const Input = ({ isLast }) => {
  const lastInput = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("lastInput", lastInput);
    lastInput.current.focus();
  }, []);

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      {isLast ? (
        <input
          type="text"
          ref={lastInput}
          value={text}
          onChange={handleChange}
        />
      ) : (
        <input type="text" />
      )}
      <br />
    </>
  );
};

export default Input;

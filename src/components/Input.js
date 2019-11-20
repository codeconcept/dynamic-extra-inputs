import React, { useRef, useEffect, useState } from "react";

const Input = ({ isLast, id, handleBlur }) => {
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
          id={id}
          ref={lastInput}
          value={text}
          onChange={handleChange}
          onBlur={() => handleBlur({ id, value: text })}
        />
      ) : (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={() => handleBlur({ id, value: text })}
        />
      )}
      <br />
    </>
  );
};

export default Input;

import React from "react";

const Input = ({ isLast }) => {
  return (
    <>
      {isLast ? <input type="text" autoFocus /> : <input type="text" />}
      <br />
    </>
  );
};

export default Input;

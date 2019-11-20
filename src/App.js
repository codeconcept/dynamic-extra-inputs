import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [nbInputs, setNbInputs] = useState([Date.now()]);

  const addInput = () => {
    setNbInputs(nbInputs.concat([Date.now()]));
  };

  const isLast = index => {
    return nbInputs.length === ++index;
  };

  return (
    <div className="App">
      {nbInputs.map((nb, index) => (
        <Input key={nb} isLast={isLast(index)} />
      ))}
      <br />
      <button onClick={addInput}>+</button>
    </div>
  );
}

export default App;

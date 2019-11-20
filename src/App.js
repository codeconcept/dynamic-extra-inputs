import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [nbInputs, setNbInputs] = useState([Date.now()]);
  const [allInputsValues, setAllInputsValues] = useState([]);

  const addInput = () => {
    setNbInputs(nbInputs.concat([Date.now()]));
  };

  const isLast = index => {
    return nbInputs.length === ++index;
  };

  const handleBlur = data => {
    let newValues = [];
    if (allInputsValues.length === 0) {
      newValues = [data];
    } else {
      const allreadyInArray = allInputsValues.find(obj => obj.id === data.id);
      if (!allreadyInArray) {
        // add
        newValues = [...allInputsValues, data];
      } else {
        // update
        newValues = allInputsValues.map(inputValue =>
          inputValue.id === data.id ? data : inputValue
        );
      }
    }
    setAllInputsValues(newValues);
  };

  return (
    <div className="App">
      <div>
        <code>
          <pre>{JSON.stringify(allInputsValues, null, 4)}</pre>
        </code>
      </div>
      {nbInputs.map((nb, index) => (
        <Input
          key={nb}
          id={nb}
          isLast={isLast(index)}
          handleBlur={handleBlur}
        />
      ))}
      <br />
      <button onClick={addInput}>+</button>
    </div>
  );
}

export default App;

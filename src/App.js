import React, { useState, useEffect } from "react";

const App = () => {
  // our starte
  const [count, setCount] = useState(null);

  //bad way
  const fruitStateVariable = useState("banana");

  // our effect
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <React.Fragment>
      <div
        onClick={() => {
          setCount(count + 1);
          fruitStateVariable[1]("hi");
        }}
        className="btn btn-success mb-3"
      >
        click
      </div>

      <div>{fruitStateVariable[0]}</div>

      <div>{count}</div>
    </React.Fragment>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInnerHeight } from "./useInnerHeight";

const App = () => {
  // our state
  const [count, setCount] = useState(0);

  //bad way
  const fruitStateVariable = useState("banana");

  // our custom effect
  const height = useInnerHeight(count);

  // our effect
  useEffect(() => {
    console.log("Component did Mount");

    return () => {
      console.log("Component did Unmount");
    };
  }, []);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(height);
  }, [height]);

  return (
    <React.Fragment>
      <p>You clicked {count} times</p>

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

      <Link to="/home">Home</Link>
    </React.Fragment>
  );
};
export default App;

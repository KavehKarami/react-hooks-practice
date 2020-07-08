import React, { useState, useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";
import { useInnerHeight } from "./useInnerHeight";

// our Reduser
const initialState = { number: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { number: state.number + 1 };
    case "decrement":
      return { number: state.number - 1 };
    default:
      throw new Error();
  }
}

const App = () => {
  // our state
  const [count, setCount] = useState(0);

  // bad way
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

  // our useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // our useRef
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Link to="/home">Home</Link>

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

      <div className="mt-3">
        <button
          className="btn btn-outline-danger btn-sm mr-3"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <span>{state.number}</span>
        <button
          className="btn btn-outline-success btn-sm ml-3"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
      </div>

      <div className="my-3">
        <input className="form-control mb-3" ref={inputEl} type="text" />
        <button className="btn btn-info btn-sm" onClick={onButtonClick}>
          Focus the input
        </button>
      </div>
    </div>
  );
};
export default App;

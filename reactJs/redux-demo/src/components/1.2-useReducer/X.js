import React, { useContext } from "react";
import CountContext from "./CountContex";
const X = () => {
  const [count, dispatch] = useContext(CountContext);

  return (
    <>
      <h2>Count:- {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>++</button>
      <button onClick={() => dispatch({ type: "decrement" })}>--</button>
      <button onClick={() => dispatch({ type: "incrementByAmt", payload: 10 })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: "decrementByAmy", payload: 10 })}>
        -10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};

export default X;

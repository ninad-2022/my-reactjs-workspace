import React, { useContext } from "react";
import CounterContext from "./CounterContext";
const D = () => {
  const [count, dispatch] = useContext(CounterContext);
  return (
    <>
      <h2>D component- {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>++</button>
      <button onClick={() => dispatch({ type: "decrement" })}>--</button>
    </>
  );
};

export default D;

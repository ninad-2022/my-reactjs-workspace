import React, { useContext } from "react";
import CounterContext from "./CounterContext";
const A = () => {
  const [count, dispatch] = useContext(CounterContext);
  return (
    <>
      <h2>A component- {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>++</button>
      <button onClick={() => dispatch({ type: "decrement" })}>--</button>
    </>
  );
};

export default A;

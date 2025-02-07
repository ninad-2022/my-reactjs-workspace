import React, { useContext } from "react";
import CounterContext from "./CounterContext";
const C = () => {
  const [count, dispatch] = useContext(CounterContext);

  return (
    <>
      <h2>C component- {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>++</button>
      <button onClick={() => dispatch({ type: "decrement" })}>--</button>
      <button onClick={() => dispatch({ type: "inc" })}>add</button>
    </>
  );
};

export default C;

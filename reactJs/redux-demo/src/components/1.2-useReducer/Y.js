import React, { useContext } from "react";
import CountContext from "./CountContex";
const Y = () => {
  const [count, dispatch] = useContext(CountContext);
  return (
    <>
      <h1>Y component</h1>
      <h2>Count={count}</h2>
    </>
  );
};

export default Y;

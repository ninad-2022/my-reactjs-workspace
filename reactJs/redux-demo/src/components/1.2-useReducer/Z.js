import React, { useContext } from "react";
import CountContext from "./CountContex";
const Z = () => {
  const [count, dispatch] = useContext(CountContext);
  return (
    <>
      <h1>Z component</h1>
      <h2>Count:{count}</h2>
    </>
  );
};

export default Z;

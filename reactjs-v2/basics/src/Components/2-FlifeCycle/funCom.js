import React, { useState } from "react";
import Counter from "./Counter";

const FuncComp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Counter</h2>
      <Counter count={count} handleCount={handleClick} />
    </>
  );
};

export default FuncComp;

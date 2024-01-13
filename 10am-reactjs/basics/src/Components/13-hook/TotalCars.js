import React from "react";
import useCounter from "./useCounter";
const TotalCars = () => {
  const [count, increment, decrement] = useCounter(0);
  return (
    <>
      <h3>I have a total {count}</h3>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
    </>
  );
};

export default TotalCars;

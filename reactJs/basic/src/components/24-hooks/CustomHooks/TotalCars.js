import React from "react";
// import { useState } from "react"; //import it if necessary
import useCounter from "./useCounter";
const TotalCars = () => {
  // using custom hook here
  // const[count, increment, decrement]= useCounter(0)
  const [count, increment, decrement] = useCounter(0);

  return (
    <>
      <h2>I have {count} cars</h2>
      <button onClick={() => increment(5)}>Buy</button>
      <button onClick={() => decrement(0)}>Sell</button>
    </>
  );
};

export default TotalCars;

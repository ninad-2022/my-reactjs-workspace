import React from "react";
import useCounter from "./useCounter";
const TotalBikes = () => {
  const [count, increment, decrement] = useCounter(0);

  const arr = useCounter(0);
  // const count = arr[0];
  // const increment = arr[1];
  // const decrement = arr[2];

  // we can destructure it
  // const [count, increment, decrement] = arr
  // instead of doing this do line no 4
  return (
    <>
      <h3>I have a total {count}</h3>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
    </>
  );
};

export default TotalBikes;

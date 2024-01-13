import React from "react";
import useCounter from "./useCounter";
const TotalBikes = () => {
  // const[count, increment, decrement]= useCounter(0)
  const [count, increment, decrement] = useCounter(0);

  return (
    <>
      <h2>I have {count} Bikes</h2>
      <button onClick={() => increment(5)}>Buy</button>
      <button onClick={() => decrement(0)}>Sell</button>
    </>
  );
};

export default TotalBikes;

import React from "react";
import withCounter from "./withCounter";
const TotalLaptops = ({ count, increment, decrement }) => {
  return (
    <>
      <h2>I have total {count}laptops</h2>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
    </>
  );
};
export default withCounter(TotalLaptops);

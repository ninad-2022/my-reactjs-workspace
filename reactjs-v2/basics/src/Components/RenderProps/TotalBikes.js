import React from "react";
const TotalBikes = ({ count, increment, decrement }) => {
  return (
    <>
      <h2>I have {count} Bikes</h2>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
    </>
  );
};
export default TotalBikes;

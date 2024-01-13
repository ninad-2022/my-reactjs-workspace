import React from "react";
const TotalCars = ({ count, buy, sell }) => {
  return (
    <>
      <h1>This is increment {count}</h1>
      <button onClick={buy}>BUY</button>
      <button onClick={sell}>SELL</button>
    </>
  );
};

export default TotalCars;

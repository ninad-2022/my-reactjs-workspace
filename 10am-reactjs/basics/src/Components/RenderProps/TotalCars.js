import React from "react";
const TotalCars = ({ total, buy, sell }) => {
  return (
    <>
      <h2>I have total {total} cars</h2>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>Sell</button>
    </>
  );
};

export default TotalCars;

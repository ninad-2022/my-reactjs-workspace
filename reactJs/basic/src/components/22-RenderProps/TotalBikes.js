import React from "react";
const TotalBikes = ({ counter, increment, decrement }) => {
  return (
    <>
      <h1>This is incrementment {counter}</h1>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>REMOVE</button>
    </>
  );
};
export default TotalBikes;

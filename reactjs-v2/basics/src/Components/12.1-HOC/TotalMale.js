import React from "react";
import withCounter from "./withCounter";
const TotalMale = ({ count, increment, decrement }) => {
  return (
    <>
      <h3>Total Male {count}</h3>
      <button onClick={increment}>Hire</button>
      <button onClick={decrement}>Fire</button>
    </>
  );
};

export default withCounter(TotalMale);

import React from "react";
import withCounter from "./withCounter";
const TotalFemale = ({ count, increment, decrement }) => {
  return (
    <>
      <h3>Total Female {count}</h3>
      <button onClick={increment}>Hire</button>
      <button onClick={decrement}>Fire</button>
    </>
  );
};

export default withCounter(TotalFemale);

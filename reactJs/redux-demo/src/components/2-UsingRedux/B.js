import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../../app/slices/CounterSlice";
const B = () => {
  const state = useSelector(selectCounter);
  return (
    <>
      <h2>B components- {state}</h2>
    </>
  );
};

export default B;

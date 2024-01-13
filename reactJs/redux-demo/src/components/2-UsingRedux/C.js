import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../../app/slices/CounterSlice";
const C = () => {
  const state = useSelector(selectCounter);
  return (
    <>
      <h2>C components- {state}</h2>
    </>
  );
};

export default C;

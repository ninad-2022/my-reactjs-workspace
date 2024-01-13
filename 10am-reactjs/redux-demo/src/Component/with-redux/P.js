import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  reset,
} from "../../app/slices/CounterSlice";
const P = () => {
  const count = useSelector(selectCount);

  const dispatch = useDispatch();
  return (
    <>
      <h2>P Component - {count}</h2>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default P;

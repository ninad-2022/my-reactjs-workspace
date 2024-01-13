import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
} from "../../app/slices/CounterSlice";
const Q = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Q Component - {count}</h2>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
    </>
  );
};

export default Q;

import React from "react";
// below two hooks are essential for using selector and dispatch
import { useDispatch, useSelector } from "react-redux";
// import the action
import {
  selectCounter,
  increment,
  decrement,
  reset,
} from "../../app/slices/CounterSlice";

const A = () => {
  // for selecting the state, useSelector takes callback, so we have to pass it as below for accessing the state but we have done this already in the selector, so directly pass the selector state to it
  // const counter = useSelector(state => state.sliceName.value) 
  const counter = useSelector(selectCounter);
  // for dispatch
  // dispatch is required to dispatch the action, it takes action creater and give us the action 
  const dispatch = useDispatch();
  return (
    <>
      <h2>A components- {counter}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        ++
      </button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default A;


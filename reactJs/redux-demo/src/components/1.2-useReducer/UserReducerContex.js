import React, { useReducer } from "react";
import CountContext from "./CountContex";
import UseReducerDemo from "./UseReducerDemo";
const UseReducerContext2 = () => {
  const reducer = (state = 0, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "incrementByAmt":
        return state + action.payload;
      case "decrementByAmt":
        return state - action.payload;
      case "reset":
        return 0;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>Use Reducer and useContext</h2>
      {/* 2.1- by using useContext(). assing the state inside the values in {{}}, you can acces <usingContext and its child anywhere  */}

      <h2>State= {state}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <CountContext.Provider value={[state, dispatch]}>
        <UseReducerDemo />
      </CountContext.Provider>
    </>
  );
};
export default UseReducerContext2;

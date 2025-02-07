import React, { useReducer } from "react";
import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";
import CounterContext from "./CounterContext";

const WithoutRedux = () => {
  let intialState = 0;
  const reducer = (state = intialState, action) => {
    switch (action.type) {
      case "increment": {
        return state + 1;
      }
      case "decrement": {
        return state - 1;
      }
      case "reset": {
        return 0;
      }
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>Without Redux</h2>
      <CounterContext.Provider value={[count, dispatch]}>
        <A />
        <hr />
        <B />
        <hr />
        <C />
        <hr />
        <D />
      </CounterContext.Provider>
    </>
  );
};

export default WithoutRedux;

import React, { useReducer } from "react";
const UseReducerContext = () => {
  //   const [visitors, setVisitors] = useState(0); //2- state for useContext()

  //   action:-
  // it is an object having property optionally Payload property
  // {type:"increment"}
  const reducer = (state = 0, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
    }
  };

  // const [state, dispatch] = userReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Use Reducer and useContext</h2>
      {/* 2.1- by using useContext(). assing the state inside the values in {{}}, you can acces <usingContext and its child anywhere  */}
      {/* <VisitorContext.Provider value={{ visitors, setVisitors }}> */}
      {/* <VisitorContext.Provider value={[state, dispatch]}>
        <UsingContext />
      </VisitorContext.Provider> */}

      <h2>State= {state}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  );
};
export default UseReducerContext;

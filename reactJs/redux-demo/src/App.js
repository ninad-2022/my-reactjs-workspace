import React from "react";
import UseReducerContext from "./components/1-using-context/UserReducerContext";
import UseReducerContext2 from "./components/1.2-useReducer/UserReducerContex";
import ReduxDemo from "./components/2-UsingRedux/ReduxDemo";
import WithoutThunk from "./components/3-without-Thunk/WithoutThunk";
import WithThunk from "./components/3.2-WithThunk/WithThunk";
import AddToCart from "./components/4-AddtoCart/AddZToCart";

function App() {
  return (
    <>
      {/* <UseReducerContext /> */}
      {/* <UseReducerContext2 /> */}
      {/* <ReduxDemo /> */}
      {/* <WithThunk /> */}
      {/* <WithoutThunk /> */}
      <AddToCart />
    </>
  );
}
export default App;

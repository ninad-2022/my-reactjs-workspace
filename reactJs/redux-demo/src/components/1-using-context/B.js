import React, { useContext } from "react";
import VisitorContext from "./VisitorContext";
const B = () => {
  const { visitors, setVisitors } = useContext(VisitorContext);
  return (
    <>
      <h2>B component - {visitor}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>New User</button>
    </>
  );
};

export default B;

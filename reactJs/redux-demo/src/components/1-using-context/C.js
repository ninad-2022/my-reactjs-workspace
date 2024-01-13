import React, { useContext, useState } from "react";
import VisitorContext from "./VisitorContext";
const C = () => {
  // accessing the state from parents and useing in by taking Visitor context
  const { visitors, setVisitors } = useContext(VisitorContext);
  return (
    <>
      <h2>C component - {visitors}</h2>
      <button onClick={() => setVisitors(visitors + 1)}>New User</button>
    </>
  );
};

export default C;

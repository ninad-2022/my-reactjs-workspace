import React, { useContext, useState } from "react";
import VisitorContext from "./VisitorContext";
const A = () => {
  const { visitors, setVisitors } = useContext(VisitorContext);
  return (
    <>
      <h2>A component - {visitor}</h2>
      <button onClick={() => setVisitors(visitors + 1)}>New User</button>
    </>
  );
};

export default A;

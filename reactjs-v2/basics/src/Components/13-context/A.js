import React from "react";
import B from "./B";
const A = ({ title }) => {
  return (
    <>
      <h2>A Component</h2>
      <B title={title} />
    </>
  );
};

export default A;

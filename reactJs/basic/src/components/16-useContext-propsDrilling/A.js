import React from "react";
import B from "./B";

//1.3 accepting the props
const A = ({ city }) => {
  return (
    <>
      <h2>Component A</h2>
      {/* 1.4 passing that props. pass this props to the B, C, D for the props drilling */}
      <B city={city} />
    </>
  );
};

export default A;

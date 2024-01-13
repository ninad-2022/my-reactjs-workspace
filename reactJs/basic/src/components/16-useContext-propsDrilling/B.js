import React from "react";
import C from "./C";

//1.3 accepting the props
const B = ({ city }) => {
  return (
    <>
      <h2>Component B</h2>
      {/* 1.4 passing that props. pass this props to the B, C, D for the props drilling */}
      <C city={city} />
    </>
  );
};

export default B;

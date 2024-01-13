import React from "react";
import D from "./D";
//1.3 accepting the props
const C = ({ city }) => {
  return (
    <>
      <h2>Component C</h2>
      {/* 1.4 passing that props. pass this props to the B, C, D for the props drilling */}
      <D city={city} />
    </>
  );
};

export default C;

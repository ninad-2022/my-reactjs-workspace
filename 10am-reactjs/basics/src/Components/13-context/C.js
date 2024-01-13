import React from "react";
import D from "./D";
import E from "./E";
const C = ({ title }) => {
  return (
    <>
      <h3>C Component</h3>
      <D title={title} />
      <E title={title} />
    </>
  );
};

export default C;

import React from "react";
import C from "./C";
const B = ({ props }) => {
  return (
    <>
      <h3>B Component</h3>
      <C {...props} />
    </>
  );
};

export default B;

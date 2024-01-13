import React, { forwardRef } from "react";
const FunChild = (props, ref) => {
  return (
    <>
      <h2>Function Child</h2>
      <input type="text" ref={ref} placeholder="function child" />
    </>
  );
};

export default forwardRef(FunChild);

import React, { forwardRef, useImperativeHandle } from "react";
const FunChild = ({ print }, ref) => {
  const greet = () => {
    alert("Hi from function child component");
  };
  useImperativeHandle(ref, () => ({
    greet: greet,
  }));
  return (
    <>
      <h2>functional child</h2>
      <button onClick={print}>call parent method</button>
    </>
  );
};

export default forwardRef(FunChild);

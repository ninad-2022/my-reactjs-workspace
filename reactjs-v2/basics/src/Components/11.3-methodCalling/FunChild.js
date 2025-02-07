import React, { forwardRef, useImperativeHandle } from "react";
const Funchild = ({ print }, ref) => {
  const greet = () => {
    alert("Hi!, from function child");
  };

  useImperativeHandle(ref, () => ({
    greet: greet,
  }));

  return (
    <>
      <h2>Function child</h2>
      <button onClick={print}>Call parent method</button>
    </>
  );
};

export default forwardRef(Funchild);

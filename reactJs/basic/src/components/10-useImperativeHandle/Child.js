import React, { forwardRef, useImperativeHandle } from "react";

const Child = (props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHi,
  }));
  const sayHi = () => {
    alert("hello from chil");
  };
  return <div>Child</div>;
};

export default forwardRef(Child);

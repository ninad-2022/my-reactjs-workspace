import React, { forwardRef, useImperativeHandle } from "react";

const FuncChild = (props, ref) => {
  //child comp method
  const printCity = (city) => {
    alert("city is" + city);
  };

  //useImperativeHandle() is use to availabe the props into the parent
  //3.4- making the properties which can access in the parent
  useImperativeHandle(ref, () => ({
    printCity: printCity,
  }));
  return (
    <>
      <h2>Function child</h2>
    </>
  );
};

// it will give the ref to the function child
// 3.3- it will only avaialbe by using forwardRef() only
export default forwardRef(FuncChild);

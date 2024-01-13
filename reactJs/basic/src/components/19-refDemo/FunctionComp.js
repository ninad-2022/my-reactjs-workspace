import React from "react";

// 6.2- props and ref are availabe here
const FuncComp = (props, ref) => {
  return (
    <>
      <h2>Function Component</h2>

      {/* 6.3- assigning that props here  */}
      <input ref={ref} />
    </>
  );
};
//6.1- we cannot access the ref of the functional comp directly as it does not have a object so we have to pass the component into the React.forwardRef().
//6.1- the purpose of the React.forwardRef() is to available the ref from the parent component to the second argument of the child component line-2
export default React.forwardRef(FuncComp);

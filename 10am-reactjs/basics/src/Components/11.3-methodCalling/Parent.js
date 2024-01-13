import React, { createRef, useRef } from "react";
import ClassChild from "./ClassChild";
import Funchild from "./FunChild";
const ParentMethod = () => {
  const classRef = createRef(); //use for class compo
  const containerRef = useRef(); //use for functional component

  const print = () => {
    alert("Hi!, from parent component");
  };
  return (
    <>
      <h3>Parent Component</h3>
      <button onClick={() => classRef.current.sayHello()}>
        Call class child method
      </button>
      <button onClick={() => containerRef?.current?.greet()}>
        Call function child method
      </button>
      <hr />
      <ClassChild print={print} ref={classRef} />
      <hr />
      <Funchild print={print} ref={containerRef} />
    </>
  );
};

export default ParentMethod;

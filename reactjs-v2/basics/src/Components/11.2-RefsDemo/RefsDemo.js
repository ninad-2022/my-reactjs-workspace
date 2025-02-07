import React, { createRef, useEffect } from "react";
import ClassChild from "./ClassChild";
import FunChild from "./FunChild";
const RefsDemo = () => {
  // new way from react v 16.3
  const inputRef = React.createRef();
  const classRef = React.createRef();

  const funRef = createRef();

  //callback refs
  //old way
  let inputRef2;
  const callbackRef = (element) => {
    inputRef2 = element;
  };

  const focusInput = () => {
    inputRef2.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="text" placeholder="inputRef" ref={inputRef} />
      <input type="text" placeholder="callbackref" ref={callbackRef} />
      <button onClick={focusInput}>Focus</button>

      <button onClick={() => classRef.current.focusInput()}>
        Focus-class-comp
      </button>

      <button onClick={() => funRef.current.focus()}>Focus-func-comp</button>

      <hr />
      <ClassChild ref={classRef} />
      <hr />
      <FunChild ref={funRef} />
    </>
  );
};

export default RefsDemo;

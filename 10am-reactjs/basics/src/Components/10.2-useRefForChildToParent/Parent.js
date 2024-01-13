import React, { createRef, useRef } from "react";
import ClassChild from "./ClassChild";
import FunChild from "./FunChild";
const Parent = () => {
  const classRef = createRef();
  //to create container to be passed to fun component
  const containerRef = useRef();
  const print = () => {
    alert("Hi from parent component");
  };
  return (
    <>
      <h2>Parent component</h2>
      <button onClick={print}>a</button>
    </>
  );
};

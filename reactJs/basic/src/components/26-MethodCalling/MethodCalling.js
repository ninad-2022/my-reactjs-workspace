import React, { useRef } from "react";
import ClassComp from "./ClassComp";
import FuncChild from "./FuncChild";
const MethodCalling = () => {
  // 2.1- make an object to call the method
  const childRef = React.createRef();

  // 3.1- creating an object using useRef(inital value )
  const funcRef = useRef(null);
  const greet = () => {
    alert("Hi from child component");
  };
  return (
    <>
      <h2>Method calling</h2>

      {/*2.2- accessing child method in the parent  */}
      <button
        onClick={() => {
          childRef.current.getName("Topper Skills here");
        }}
      >
        Child Method
      </button>

      {/* 1.2- pasing greet() as a props */}
      {/* 2.3- pass the ref  */}
      <ClassComp greet={greet} ref={childRef} />
      <hr />

      {/* 3.2- assinging that value here as ref */}
      <FuncChild ref={funcRef} />
      <button onClick={() => funcRef.current.printCity("Pune")}>
        func Child Method
      </button>
    </>
  );
};

export default MethodCalling;

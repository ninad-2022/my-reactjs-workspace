import React, { useEffect } from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FunctionComp";

const BasicRef = () => {
  // M-1.1 creating a reference variable
  const inputRef = React.createRef();

  //for classs comp
  const classRef = React.createRef();
  //for funct comp
  const FuncRef = React.createRef();

  //M-2.1 creating a variable for callback
  let inputRef2;

  //M-2.2 making a callback function
  const refCB = (element) => {
    inputRef2 = element;
  };

  // use it during the mounting phase. accessig that ref here
  useEffect(() => {
    // inputRef.current.focus() //M-1 accessig

    inputRef2.focus(); //M-2.4 accessing the node here

    console.log("Class Ref:", classRef);
    console.log("Func Ref:", FuncRef);

    // [] = dependency array = use this stands for the dependency Array. it calls only once on the empty array whereas calling depends upon the variable given in it
  }, []);

  return (
    <>
      <h1>Basic Refs</h1>
      {/* M-1.2 attaching that ref here*/}
      <input type="text" ref={inputRef} />

      {/* M-2.3 attaching it to the input */}
      <input type="text" ref={refCB} />
      <hr />
      <ClassComp ref={classRef} />
      {/* 5.4 using the child component refs in the parent by callback  */}
      <button onClick={() => classRef.current.foucsInput()}>Focus Input</button>
      <hr />
      <FuncComp ref={FuncRef} />
      <button onClick={() => FuncRef.current.focus()}>Focus Input</button>
    </>
  );
};

export default BasicRef;

// Note: If you pass the reference to the class component then that reference will refer to the object of that class component, but if you pass the reference to the functional component then the reference will refer to null because an object for the function component will not be created.

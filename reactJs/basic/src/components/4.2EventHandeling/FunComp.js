import React, { Component, useState } from "react";
const FunComp = () => {
  const [name, setName] = useState("Topper Skills");
  
  //state for toggle button
  const [show, setShow] = useState(true);
  const handleClick = () => {
    alert("Hello" + name);
  };
  return (
    <>
      <button onClick={handleClick}>Click here</button>
      {/* toggle button  */}
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <h2>Ninad here</h2>}
    </>
  );
};

export default FunComp;

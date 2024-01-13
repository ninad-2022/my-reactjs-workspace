import React, { Component, useState } from "react";
const BgColorTask = () => {
  // to save the values into state as mouse moves
  //maintainingg a object using initial   value 0, 0
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //to change the values of the x and y.
  const handleMouseMove = (e) => {
    // using x and y as alias
    const { clientX: x, clientY: y } = e;

    // setting x, y objects into the position
    setPosition({ x, y });
  };

  // bahar available nhi hai isiliye ye liya hamne 
  const { x, y } = position;
  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "1000vh", backgroundColor: `rgb(100, ${x}, ${y})` }}
    ></div>
  );
};

export default BgColorTask;

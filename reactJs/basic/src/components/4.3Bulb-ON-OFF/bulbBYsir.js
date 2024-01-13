import React, { Component, useState } from "react";
const BulbTask = () => {
  const [on, setOn] = useState(false);
  return (
    <>
      <img src={on ? "images/on.jpg" : "images/off.jpg"} />
      <button onClick={() => setOn(!on)}>{on ? "OFF" : "ON"}</button>
    </>
  );
};
export default BulbTask;

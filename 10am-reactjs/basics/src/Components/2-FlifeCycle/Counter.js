import React, { useEffect } from "react";
const Counter = ({ count, handleCount }) => {
  useEffect(() => {
    console.log("component is mounted");
  }, []);

  useEffect(() => {
    console.log("component is updated");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("component is unmounted");
    };
  }, []);
  return (
    <>
      <h2>counter -{count}</h2>
      <button onClick={handleCount}>++</button>
    </>
  );
};

export default Counter;

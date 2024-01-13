import React, { useCallback, useEffect, useState } from "react";
const EffectHook = () => {
  const [count, setCount] = useState(0);
  // useEffect(useCallback, dependency list)

  // componentDidMount
  // If you did not pass any dependency then callback will get executed only once after the mounting
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  //   the callback will execute whenever there is a change in the count
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return (
    <>
      <h1>Side effect hook, {count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
    </>
  );
};

export default EffectHook;

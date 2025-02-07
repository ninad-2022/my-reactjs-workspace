import React, { useEffect, useState } from "react";
const PracLifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component  mount");
  }, []);

  useEffect(() => {
    console.log("component did mount");
  }, [count]);

  useEffect(() => {
    return () => console.log("component will Unmount");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
    </>
  );
};

export default PracLifeCycle;

import React, { useState } from "react";
const Counter = ({ render, children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const deccrement = () => {
    setCount(count - 1);
  };

  return render
    ? render(count, increment, deccrement)
    : children(count, increment, deccrement);
};

export default Counter;

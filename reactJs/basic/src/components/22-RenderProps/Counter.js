// writng a logic in the Counter
import React from "react";
import { useState } from "react";
const Counter = ({ render, children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const deccrement = () => {
    setCounter(counter - 1);
  };
  return render
    ? render(counter, increment, deccrement)
    : children(counter, increment, deccrement);
};

export default Counter;

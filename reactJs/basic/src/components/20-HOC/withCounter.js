import React, { Component, useState } from "react";
//1.1- we have to make a WrappedComponent below and pass it as an argument to the HOC componenet/
//HOC is a function which takes the componenet as parameter and returns a logic by using props
const withCounter = (WrappedComponent) => {
  return () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };

    //1.3- taking as a child for the
    //1.2- we can only pass the props from parent

    return (
      <WrappedComponent
        //1.4- it available as the props
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
};

export default withCounter;

import React, { useState } from "react";
const withCounter = (WrappedComponent) => {
  const WrapperComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
  return WrapperComponent;
};
export default withCounter;

// step-1: take a WrappedComponent as an input
// step-2: create a WrapperComponent to wrap the WrappedComponent and pass it to the WrappedComponent as props

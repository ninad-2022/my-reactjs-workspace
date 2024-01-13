import React, { useState } from "react";
const FunctionalComp = (props) => {
  const [count, setCount] = useState(0);
  return (
    <h2>
      <button onClick={() => setCount(count + 1)}>++</button>
      this is functional compoenent {count} - {props.city}
    </h2>
  );
};
export default FunctionalComp;

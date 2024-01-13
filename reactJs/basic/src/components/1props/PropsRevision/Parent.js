import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  // 1.1- making a state
  const [city, setCity] = useState("Mumbai");

  // 1.2- making a function
  const greet = () => {
    alert("Happy to have you techie");
  };
  return (
    <>
      <React.Fragment>
        <div>hhii</div>
        <li>hello</li>
        <h2>hii</h2>
      </React.Fragment>
      <h1>Parent Component</h1>

      {/*1.3- passing that function and state to the <Child/> as props. it will internally create a objct named props. to access these state and function into the child comp, use the same props name given here i.e. location and greet  */}
      <Child location={city} greet={greet} />
    </>
  );
};

export default Parent;

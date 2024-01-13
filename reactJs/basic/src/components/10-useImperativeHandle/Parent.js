import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef();
  return (
    <>
      <Child ref={ref} />
      <button onClick={() => ref.current.sayHi()}>Child-button</button>
    </>
  );
};

export default Parent;

/*
- create a ref and send it to the parent
- forward that to child by wrapping child component forwardRef()
- create useImperativeHanle(ref, ()=>(),[dependency]). add function into callback which want to  access the the parent into it
- access the function on the ref in parent that you have send to child
*/

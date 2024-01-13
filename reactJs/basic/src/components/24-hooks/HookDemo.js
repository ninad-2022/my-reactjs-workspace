import React, { useState } from "react";
import EffectHook from "./EffectHook";
import StateHook from "./StateHook";
const HookDemo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <StateHook /> */}
      <h1>Hook Demo</h1>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <EffectHook />}
    </>
  );
};

export default HookDemo;

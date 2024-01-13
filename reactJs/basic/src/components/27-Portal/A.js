import React from "react";
import { createPortal } from "react-dom";
import B from "./B";

const A = () => {
  return (
    <>
      <h2>A Component</h2>

      {/* here B is a child of the A but we have to display it out of the B So we use createPortal(child, node that we want to display) */}
      {createPortal(<B />, document.getElementById("root-container"))}
    </>
  );
};

export default A;

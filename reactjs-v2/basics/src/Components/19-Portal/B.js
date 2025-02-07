import React from "react";
import ReactDOM from "react-dom";
import C from "./C";
const B = () => {
  return (
    <>
      <h2>B component</h2>
      {ReactDOM.createPortal(
        <C title="Topper Skills" city="Pune" />,
        document.getElementById("other")
      )}
    </>
  );
};

export default B;

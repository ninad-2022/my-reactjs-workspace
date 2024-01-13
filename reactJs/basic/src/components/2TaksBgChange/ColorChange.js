import React, { useState } from "react";
const ChangeColor = () => {
  const [color, setColor] = useState("pink");
  return (
    <>
      <div
        style={{
          width: 400,
          height: 400,
          margin: "auto",
          backgroundColor: color,
        }}
      ></div>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("black")}>Black</button>
    </>
  );
};

export default ChangeColor;

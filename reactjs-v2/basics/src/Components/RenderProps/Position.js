import React from "react";
const Position = ({ x, y }) => {
  return (
    <span
      style={{
        position: "absolute",
        padding: 5,
        borderRadius: 5,
        top: y,
        left: x,
        border: "1px solid #999",
      }}
    >
      X:{x},Y:{y}
    </span>
  );
};

export default Position;

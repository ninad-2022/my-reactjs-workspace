import React, { useState } from "react";
const Mouse = ({ render, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <section
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      style={{ height: "100vh", position: "relative" }}
    >
      {render ? render(position) : children(position)}
    </section>
  );
};

export default Mouse;

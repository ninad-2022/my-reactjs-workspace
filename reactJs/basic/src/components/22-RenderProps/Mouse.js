import React, { useState } from "react";

const Mouse = ({ ravindra }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <section
      style={{ height: "100vh", position: "relative" }}
      onMouseMove={handleMouseMove}
    >
      {ravindra(position)}
    </section>
  );
};

export default Mouse;

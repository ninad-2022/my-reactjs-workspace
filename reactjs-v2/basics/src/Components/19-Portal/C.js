import React from "react";
const C = ({ title, city }) => {
  return (
    <>
      <h2 style={{ padding: 10 }}>
        C component - {title} {city}
      </h2>
    </>
  );
};

export default C;

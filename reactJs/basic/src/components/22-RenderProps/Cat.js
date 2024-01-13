import React from "react";

const Cat = ({ x, y }) => {
  return (
    <img
      src="images/image.jpg"
      style={{ height: 100, width: 100, top: y, left: x, position: "absolute" }}
    />
  );
};
export default Cat;

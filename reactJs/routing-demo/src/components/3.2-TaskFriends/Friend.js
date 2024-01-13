import React from "react";
const Friend = ({ image, id, title, place, contact, desc }) => {
  return (
    <div
      style={{
        width: 200,
        padding: 10,
        margin: 8,
        border: "2px solid #888",
        borderRadius: 5,
      }}
    >
      <img src={image} style={{ width: "100%" }} />
      <h2>id:-{id}</h2>
      <h2>title:-{title}</h2>
      <h2>place:-{place}</h2>
      <h2>contact:-{contact}</h2>
      <h2>desc:-{desc}</h2>
    </div>
  );
};

export default Friend;

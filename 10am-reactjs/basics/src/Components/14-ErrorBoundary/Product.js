import React from "react";
const Product = ({ id, title, brand, price, desc }) => {
  if (!price) throw new Error("Price is required");

  return (
    <div
      style={{ width: 250, padding: 10, margin: 10, border: "1px solid #000" }}
    >
      <h3>
        {id}-{title}
      </h3>
      <h4>Brand:- {brand}</h4>
      <h4>Price:- {price}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Product;

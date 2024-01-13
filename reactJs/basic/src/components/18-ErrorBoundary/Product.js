import React from "react";
const Product = ({ title, brand, price, desc }) => {
  if (!price) throw new Error("Price is required");
  return (
    <>
      <div style={{ width: 200, border: "2px solid #000" }}>
        <h3>{title}</h3>
        <h3>{brand}</h3>
        <h3>price:-{price}</h3>
        <h3>{desc}</h3>
      </div>
    </>
  );
};

export default Product;

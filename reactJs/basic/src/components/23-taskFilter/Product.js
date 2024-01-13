import React from "react";
//1.3- created for displaying filtered component --to ProductList.js 1.4
const Product = ({ id, title, price }) => {
  return (
    <div
      style={{
        width: 200,
        border: "2px solid #000",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <h3>Id: {id}</h3>
      <h3>Title: {title}</h3>
      <h3>Price: {price}</h3>
    </div>
  );
};

export default Product;

import React from "react";
const Product = ({ id, title, brand, price, desc, image }) => {
  return (
    <div
      style={{
        width: 250,
        padding: 10,
        margin: 5,
        border: "2px solid #999",
        borderRadius: 5,
      }}
    >
      <img src={image} />
      <h3>id:- {id}</h3>
      <h3>title:- {title}</h3>
      <h3>brand:- {brand}</h3>
      <h3>price:- {price}</h3>
      <h3>description:- {desc}</h3>
    </div>
  );
};

export default Product;

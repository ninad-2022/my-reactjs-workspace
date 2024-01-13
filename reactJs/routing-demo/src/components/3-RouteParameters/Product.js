import React from "react";
import { Link } from "react-router-dom";

// 4.4- taking category as props
const Product = ({ category, id, title, brand, price, desc, image }) => {
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
      <img src={image} style={{ width: "100%" }} />
      <h3>
        {/* 4.3- here we are navigating the data. on category and the id to={`/${category}/${id}`}>  */}
        <Link to={`/${category}/${id}`}>
          {title}-{id}
        </Link>
      </h3>
      <h4>{brand}</h4>
      <h4>Price:- {price}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Product;

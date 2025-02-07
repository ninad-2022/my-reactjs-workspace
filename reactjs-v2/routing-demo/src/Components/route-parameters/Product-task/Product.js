import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, brand, price, desc, picture, category }) => {
  return (
    <div
      style={{ width: 200, border: "1px solid #999", padding: 10, margin: 5 }}
    >
      <img src={picture} style={{ width: "100%", height: 200 }} />
      <h3>
        <Link to={`/${category}/${id}`}>
          {id}-{title}
        </Link>
      </h3>
      <h4>Price- {price}</h4>
      <h4>brand- {brand}</h4>
      <p>desc- {desc}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;

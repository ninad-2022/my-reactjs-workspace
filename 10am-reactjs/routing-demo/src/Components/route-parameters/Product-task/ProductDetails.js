import React, { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
// const data = lazy(() => import("./data"));

const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const arr = data[category];
    const prod = arr?.find((prod) => prod.id == id);
    if (prod) setProduct(prod);
  }, [category, id]);

  const { id: prodId, title, brand, price, picture, desc } = product;

  return (
    <div>
      <img src={picture} />
      <h3>
        {prodId} {title}
      </h3>
      <h3>Brand:- {brand}</h3>
      <h3>Price:- {price}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProductDetails;

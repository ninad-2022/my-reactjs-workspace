import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const { id } = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resolve) => {
        setProd(resolve.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { title, image, price } = prod;
  return (
    <div>
      <img src={image} />
      <h2>id-{id}</h2>
      <h2>title-{title}</h2>
      <h2>price-{price}</h2>
    </div>
  );
};
export default SingleProduct;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { title, price, description, image, rating } = product;
  return (
    <>
      <img src={image} />
      <h2>
        {id} - {title}
      </h2>
      <p>Price-{price}</p>
      <p>Description- {description}</p>
    </>
  );
};

export default ProductDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/FakeStoreAPI";
const SingleProduct = () => {
  const { id } = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    API.get(`/products/${id}`)
      .then((response) => {
        setProd(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const { id: prodId, title, price, description, image } = prod;
  return (
    <>
      <img src={image} style={{ width: "100%" }} />
      <h5>{title}</h5>
      <h5>{price}</h5>
      <p>{description}</p>
    </>
  );
};

export default SingleProduct;

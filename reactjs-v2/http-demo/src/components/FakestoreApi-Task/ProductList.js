import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../api/FakeStoreAPI";
const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = "/products";
    if (category && category != "all") url = `/products/category/${category}`;
    API.get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map(({ image, title, price, description, id }) => (
            <div
              key={title + id}
              style={{
                width: 250,
                border: "1px solid black",
                margin: 5,
              }}
            >
              <img src={image} style={{ width: "100%" }} />
              <h5>
                <Link to={`/details/${id}`}>{title}</Link>
              </h5>

              <h4>{price}</h4>
              <p>{description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductList;

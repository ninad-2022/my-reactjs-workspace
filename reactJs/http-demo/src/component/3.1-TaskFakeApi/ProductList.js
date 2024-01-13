import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((resolve) => {
        setProducts(resolve.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map(({ image, id, title, price, description }) => (
            <div
              style={{
                width: 250,
                border: "2px solid #333",
                padding: 2,
                margin: 2,
              }}
              key={id}
            >
              <img src={image} style={{ width: "100%" }} />
              <h2>
                <Link to={`/details/${id}`}>{title}</Link>
              </h2>
              <h2>{price}</h2>
              <p>{description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductList;

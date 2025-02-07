import React, { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import Product from "./Product";
// const data = lazy(() => import("./data"));
// const Product = lazy(() => import("./Product"));

const ProductList = () => {
  const { category } = useParams();
  const [products, setProduct] = useState([]);

  // for making fiilter
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category == "all") {
      const arr = Object.values(data).flat(2);
      if (arr) setProduct(arr);
    } else {
      const prods = data[products];
      if (prods) setProduct([...prods]);
    }
  }, [category]);

  const filterProducts = (brand) => {
    if (brand == "all") return setFilteredProducts([...products]);

    const arr = products.filter(
      (prod) => prod.brand.toLowerCase() == brand.toLowerCase()
    );
    setFilteredProducts(arr);
  };
  return (
    <section>
      <button onClick={() => filterProducts("all")}>All</button>
      <button onClick={() => filterProducts("dell")}>Dell</button>
      <button onClick={() => filterProducts("tata")}>Tata</button>
      <button onClick={() => filterProducts("lenovo")}>Lenovo</button>
      <button onClick={() => filterProducts("sony")}>Sony</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(filteredProducts) &&
          filteredProducts.map((prod) => (
            <Product key={prod.id} {...prod} category={category} />
          ))}
      </div>
    </section>
  );
};

export default ProductList;

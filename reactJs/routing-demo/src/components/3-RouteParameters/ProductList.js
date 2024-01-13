import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import productData from "./Products.json";

const ProductList = () => {
  const { category } = useParams([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const pro = productData[category];
    if (pro) setProducts(pro);
  }, [category]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(products) &&
        products.map((prod, i) => (
          //4.5- we have to pass catergory to the product
          <Product key={prod + i} category={category} {...prod} />
          //   sir wrote key={prod.i} but was showing unique key error
        ))}
    </div>
  );
};

export default ProductList;

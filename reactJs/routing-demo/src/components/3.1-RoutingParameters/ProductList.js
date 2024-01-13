import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

// 2.4- use productData for taking it into the category in 2.5
import productData from "./products.json";
const ProductList = () => {
  // 2.3- accesing the route parameters here, you have to use the same name as you have given into the params at 2.2 in Product.js
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  // 2.5- display only when you have category
  useEffect(() => {
    //2.6- here you will get an array of the products in  the products state at line 9, display that prouct array on UI
    const pro = productData[category];
    if (pro) setProducts(pro);
  }, [category]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* 2.7 make a separate single products and map it here  */}
      {Array.isArray(products) &&
        products.map((prod, i) => <Product key={prod + i} {...prod} />)}
    </div>
  );
};

export default ProductList;

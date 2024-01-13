import React from "react";
import Product from "./Product";

//1.4- taking a separate Component for filtered product list. then set it into FilterTask.js @ 1.5
const ProductList = ({ products }) => {
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(products) &&
        products.map((prod, i) => <Product key={prod.id + i} {...prod} />)}
    </section>
  );
};

export default ProductList;

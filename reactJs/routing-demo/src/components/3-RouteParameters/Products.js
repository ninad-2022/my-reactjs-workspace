import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./3ProductDetails";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import products from "./Products.json";

const Products = () => {
  return (
    <section style={{ display: "flex" }}>
      {/* for left side category  */}
      <div style={{ width: "25vw" }}>
        <CategoryList items={Object.keys(products)} />
      </div>

      {/* for right side list  */}
      <div>
        <Routes>
          {/*4.2- here we want category and id both and in the list we only want id -> do navigation into product.js  */}
          <Route path="/:category/:id" element={<ProductDetails />} />
          <Route path="/:category" element={<ProductList />} />
        </Routes>
      </div>
    </section>
  );
};

export default Products;

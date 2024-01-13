//1.2- displaying <productList/> and <categoryList/> on the UI
import React from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import products from "./products.json";
import { Routes, Route } from "react-router-dom";
const Products = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <div style={{ width: "25vw", backgroundColor: "red" }}>
          {/*1.3- passing products Object to display on the UI  */}
          <CategoryList items={Object.keys(products)} />
        </div>
        <div style={{ backgroundColor: "yellow" }}>
          {/*2.1- defining a rotue here  */}
          <Routes>
            {/* 2.2- defining a routing parameter for the <ProductList /> */}
            <Route path="/:category" element={<ProductList />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default Products;

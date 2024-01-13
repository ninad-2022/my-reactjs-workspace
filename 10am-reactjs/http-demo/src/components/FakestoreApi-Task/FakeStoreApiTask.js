import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import ProductList from "./ProductList";
import SingleProduct from "./SingleProduct";
const FakeStoreApiTask = () => {
  return (
    <>
      <section style={{ display: "flex" }}>
        <div>
          <Category />
        </div>
        <Routes>
          <Route path="/:category" element={<ProductList />} />
          <Route path="/details/:id" element={<SingleProduct />} />
        </Routes>
      </section>
    </>
  );
};

export default FakeStoreApiTask;

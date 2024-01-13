import React from "react";
import Category from "./Category";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import SingleProduct from "./SingleProduct";
const TaskFakeApi = () => {
  return (
    <section style={{ display: "flex" }}>
      <div
        style={{
          border: "2px solid black",
        }}
      >
        <Category />
      </div>
      <div>
        <Routes>
          <Route path="/:category" element={<ProductList />} />
          <Route path="/details/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </section>
  );
};

export default TaskFakeApi;

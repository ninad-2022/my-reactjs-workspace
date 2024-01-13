import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import Categories from "./Categories";
// import ProductList from "./ProductList";
// import ProductDetails from "./ProductDetails";
const Categories = lazy(() => import("./Categories"));
const ProductList = lazy(() => import("./ProductList"));
const ProductDetails = lazy(() => import("./ProductDetails"));

const ProductTask = () => {
  return (
    <>
      <h3>Product Task</h3>
      <section style={{ display: "flex" }}>
        <Suspense fallback="loading...............">
          <Categories />
        </Suspense>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="" element={<Navigate to="/all" />} />
            <Route path=":category" element={<ProductList />} />
            <Route path=":category/:id" element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </section>
    </>
  );
};

export default ProductTask;

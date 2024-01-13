import React, { lazy, Suspense } from "react";
import CategoryList from "./CategoryList";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

// const ProductList = lazy(() => {
//   import("./ProductList");
// });
// const ProductDetails = lazy(() => {
//   import("./ProductDetails");
// });
const StoreAPITask = () => {
  return (
    <section>
      <div>
        <CategoryList />
      </div>
      <div>
        <Suspense fallback={<div>Loading.....</div>}>
          <Routes>
            {/* {http://localhost:3000/11 /} */}
            <Route path="/:category" element={<ProductList />} />

            {/* http://localhost:3000/details/11 /} */}
            <Route path="/details/:id" element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </div>
    </section>
  );
};

export default StoreAPITask;

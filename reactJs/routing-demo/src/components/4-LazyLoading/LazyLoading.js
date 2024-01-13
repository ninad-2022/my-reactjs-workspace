import React, { lazy, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
//below import is not required for the lazy loading so, go with the dynamic import
// import Products from "./Products";
// import Customers from "./Customers";
// import Orders from "./Orders";
// import LandingPage from "./LandingPage";

//dynamic import-
// take a variable and assign lazy() function to it then give a callback
// inside the callback import component by assigning path in ""
const Customers = lazy(() => import("./Customers"));
const Products = lazy(() => import("./Products"));
const Orders = lazy(() => import("./Orders"));
const LandingPage = lazy(() => import("./LandingPage"));

const LazyLoading = () => {
  return (
    <>
      <h2>Lazy Loading</h2>
      <Link to="">Home</Link>
      <Link to="/products">Product</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/orders">Orders</Link>

      {/* use of <Suspense></Supspense> for displaying the Loading time , have to import it from the react.  */}
      {/* you can pass components to it as well  */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default LazyLoading;

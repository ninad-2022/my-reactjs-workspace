import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";
import { loadProducts } from "./thunk-action";
import CartCounter from "./CartCounter";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";

const ShoppingCART = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <h3>Shopping cart</h3>
        <CartCounter />
      </section>
      <Routes>
        <Route path="" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
export default ShoppingCART;

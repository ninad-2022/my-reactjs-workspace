import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "./ShoppingSlice";
const CartCounter = () => {
  const length = useSelector(selectCart)?.products?.length;
  return (
    <>
      <Link to="/cart">
        <span style={{ backgroundColor: "cyan", padding: 10, borderRadius: 5 }}>
          {length}
        </span>
      </Link>
    </>
  );
};

export default CartCounter;

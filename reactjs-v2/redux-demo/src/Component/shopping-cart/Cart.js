import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCart,
  selectProducts,
} from "./ShoppingSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCart);
  const products = useSelector(selectProducts);
  //   const cartProducts = {userId:0, products:[{id:1, quantity:2}, {id:3, quantity;}]}
  // [1, 3];

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const prodList = cartProducts.products.map((prod) => {
      const p = products.find(({ id }) => id == prod.id);
      return { ...prod, ...p };
    });
    setProductList(prodList);
  }, [cartProducts]);

  const addProduct = (id) => {
    console.log("adding");
    dispatch(addToCart({ id: id }));
  };

  const removeProduct = (id) => {
    console.log("removing..");
    dispatch(removeFromCart({ id: id }));
  };
  let total = 0;

  return (
    <>
      <h2>
        Cart <Link to="/">Go to list</Link>
      </h2>
      {productList.map((prod) => {
        total += prod.price * prod.quantity;
        return (
          <div
            key={prod.id}
            style={{ border: "1px solid #999", padding: 5, margin: 5 }}
          >
            <h4>
              {prod.id}
              {prod.title}
            </h4>
            <h4>Qty:- {prod.quantity}</h4>
            <h4>Price:- {prod.price}</h4>
            <div>
              <button onClick={() => removeProduct(prod.id)}>--</button>
              <span>{prod.quantity}</span>
              <button onClick={() => addProduct(prod.id)}>++</button>
            </div>
            <h4>Sub total: {prod.price * prod.quantity}</h4>
          </div>
        );
      })}
      <div>Total:{Math.round(total)}</div>
    </>
  );
};

export default Cart;

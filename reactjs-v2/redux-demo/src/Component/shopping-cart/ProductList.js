import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectCart, addToCart } from "./ShoppingSlice";
const Product = ({ id, title, price, description, image }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  let message = "Add to cart";
  if (cart?.products?.some((pro) => pro.id == id)) message = "added to cart";

  return (
    <div
      style={{ border: "1px solid #888", width: 250, padding: 5, margin: 5 }}
    >
      <img src={image} style={{ width: "100%" }} />
      <h4>
        {id}-{title}
      </h4>
      <h4>Price:{price}</h4>
      <p>{description}</p>
      <button onClick={() => dispatch(addToCart({ id: id }))}>{message}</button>
    </div>
  );
};
const ProductList = () => {
  const products = useSelector(selectProducts);
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(products) &&
        products.map((prod) => <Product key={prod.id} {...prod} />)}
    </section>
  );
};

export default ProductList;

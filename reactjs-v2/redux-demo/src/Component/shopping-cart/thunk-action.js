import axios from "axios";
import { addProducts } from "./ShoppingSlice";

export const loadProducts = () => (dispatch, getState) => {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    dispatch(addProducts(response.data));
  });
};

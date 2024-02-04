import axios from "axios";

export const fetchProducts = (data: object) => {
    return axios.get("https://dummyjson.com/products", data);
};

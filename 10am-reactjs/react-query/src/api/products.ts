import axios from "axios";

export const fetchProducts = (data: object) => {
    return axios.get(`https://dummyjson.com/products`, data);
};

export const fetchSingleProducts = (productId: number) => {
    return axios.get(`https://dummyjson.com/products/${productId}`);
};

export const updateProducts = (data: object) => {
    return axios.put("https://dummyjson.com/products", data);
};

import axios from "axios";
const FakeStoreInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default FakeStoreInstance;

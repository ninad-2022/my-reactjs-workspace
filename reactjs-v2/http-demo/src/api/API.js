import axios from "axios";
const Instance = axios.create({
  baseURL: "http://localhost:8080",
});

Instance.interceptors.request.use((req) => {
  console.log("sending request...");
  return req;
});

Instance.interceptors.response.use(
  (res) => {
    console.log("response received...");
    return res;
  },
  (err) => {
    console.log("error response", err);
    return Promise.reject(err);
    // it returns catch directly
  }
);

export default Instance;

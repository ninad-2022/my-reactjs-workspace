import axios from "axios";

const Instance = axios.create({
  baseURL: "https://restcountries.com/v2",
});

Instance.interceptors.request.use((req) => {
  console.log("sendeing Request....");
  return req;
});

Instance.interceptors.response.use(
  (resp) => {
    console.log("response Recived..");
    return resp;
  },
  (err) => {
    console.log("err", err);
    return Promise.reject(err);
  }
);

export default Instance;

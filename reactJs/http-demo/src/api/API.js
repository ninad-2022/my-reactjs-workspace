import axios from "axios";
import endpoints from "./endpoints.json";

// intercept the resquest for all servers
axios.interceptors.request.use(
  (req) => {
    req.headers["abcd"] = "Topper Skills";
    return req;
  },
  (err) => {
    console.log("could not made the request", err);
    return err;
  }
);

// dispaly error message for failed response
axios.interceptors.response.use(
  (res) => {
    console.log("Success request");
    return res;
  },
  (err) => {
    alert("response invalid");
    return err;
  }
);
// here, making instances of the server, can use this instances in programe files
// reqres.in
export const reqResInstance = axios.create({
  baseURL: endpoints.reqresURL,
});
reqResInstance.interceptors.request.use(
  (req) => {
    req.headers["title"] = "reqres";
    return req;
  },
  (err) => {
    console.log("Could not make the request", err);
  }
);

// placeholder
export const jsonInstance = axios.create({
  baseURL: endpoints.typicodeURL,
});
jsonInstance.interceptors.request.use(
  (req) => {
    req.headers["title"] = "JSON server";
    return req;
  },
  (err) => {
    console.log("Could not make the request", err);
  }
);

// myServer
export const myServerInstance = axios.create({
  baseURL: endpoints.myServerURL,
});
myServerInstance.interceptors.request.use(
  (req) => {
    req.headers["title"] = "MyServer";
    return req;
  },

  (err) => {
    console.log("Could not make the request", err);
  }
);
// we dont have to made this kind of the request everytime, just use instances only. can chnage server name only once
// axios.get("http://localhost:8080/users")
// axios.post("http://localhost:8080/users")

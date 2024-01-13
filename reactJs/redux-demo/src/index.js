import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// provide the value by using this and also provide the store
import { Provider } from "react-redux";
import store from "./app/Store";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  // proving props to the Ract app. So, it will available in all over the app
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

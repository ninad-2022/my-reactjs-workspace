import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// to avoid below error:-
// ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17

import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"))
root.render(
  <Router>
    <App />
  </Router>
);

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // // import './index.css';
// // // import App from './App';
// // // import reportWebVitals from './reportWebVitals';

// // // ReactDOM.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>,
// // //   document.getElementById('root')
// // // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   return <h3>App component</h3>;
// };

// const name = "you can do dynamic here";
// const content = (
//   <div className="container">
//     <label htmlFor="uname">label</label>
//     <input type="text" tableIndez="1"></input>
//     <p>sample para const name ac {name}</p>
//     <p>JSX Expression: 10 + 10 = {10 + 10}</p>
//     <App></App>
//     <p>Again run</p>
//   </div>
// );

// ReactDOM.render(content, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
ReactDOM.render(<App />, document.getElementById("root"));

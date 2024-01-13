import React, { lazy } from "react";
import { Link } from "react-router-dom";
import data from "./data";
// const data = lazy(() => import("./data"));

const Categories = () => {
  return (
    <div style={{ width: "30%", backgroundColor: "orange", padding: 20 }}>
      <h3>Categories</h3>
      <ul>
        <li>
          <Link to={`/all`}>All Categories</Link>
        </li>
        {Object.keys(data).map((cat, i) => (
          <li key={cat + i}>
            <Link to={`/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

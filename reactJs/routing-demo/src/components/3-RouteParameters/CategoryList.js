import React from "react";
import { Link } from "react-router-dom";
const CategoryList = ({ items }) => {
  return (
    <ul>
      {Array.isArray(items) &&
        items.map((item, i) => (
          <li key={item + i}>
            {/* this will navigate on productList  */}
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
    </ul>
  );
};

export default CategoryList;

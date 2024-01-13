import React from "react";
import { Link } from "react-router-dom";
// here we are taking category
const CategoryList = ({ items }) => {
  return (
    <ul>
      {/* 1.1- accessing category from the product.json  */}
      {Array.isArray(items) &&
        items.map((item, i) => (
          <li key={i}>
            {/* navigating. here {item} is category. to={data from list} */}
            <Link to={`${item}`}>{item}</Link>
          </li>
        ))}
    </ul>
  );
};

export default CategoryList;

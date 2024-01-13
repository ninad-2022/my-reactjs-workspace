import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((resolve) => {
        setCategories(resolve.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ul style={{ listStyle: "none" }}>
      {Array.isArray(categories) &&
        categories.map((item, i) => (
          <li key={item + i}>
            <Link style={{ textDecoration: "none" }} to={`/${item}`}>
              {item}
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default Category;

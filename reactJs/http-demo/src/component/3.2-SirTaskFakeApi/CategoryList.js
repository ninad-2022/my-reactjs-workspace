import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h4>Categoies</h4>
      <ul>
        {categories &&
          categories.map((cat) => (
            <li key={cat}>
              <Link to={`/${cat}`}>{cat}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CategoryList;

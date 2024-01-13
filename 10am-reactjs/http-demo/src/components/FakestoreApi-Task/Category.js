import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API from "../../api/FakeStoreAPI";
const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get(`/products/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "yellow", padding: 20, height: "100%" }}>
        <h3>Categories</h3>
        <ul>
          <li>
            <Link to="/all">All categories</Link>
          </li>
          {categories &&
            categories.map((cat, i) => (
              <li key={cat + i}>
                <Link style={{ textDecoration: "none" }} to={`/${cat}`}>
                  {cat}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Category;

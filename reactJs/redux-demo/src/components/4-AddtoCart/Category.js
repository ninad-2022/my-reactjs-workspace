import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory, showCateogry } from "../../app/slices/CategorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector(selectCategory);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        dispatch(showCateogry(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ul style={{ listStyle: "none" }}>
      {categoryState &&
        categoryState.map((item, i) => (
          <li key={item + i}>
            <Link style={{ textDecoration: "none" }} to="">
              {item}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Category;

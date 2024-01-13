import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  showCategoryList,
  selectCategoryList,
} from "../../app/slices/CategoryListSlice";
const CategoryList = () => {
  const dispatch = useDispatch();
  const CategoryListState = useSelector(selectCategoryList);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/jewelery`)
      .then((response) => {
        dispatch(showCategoryList(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {CategoryListState &&
          CategoryListState.map(({ image, id, title, price, description }) => (
            <div
              style={{
                width: 250,
                border: "2px solid #333",
                padding: 2,
                margin: 2,
              }}
              key={id}
            >
              <img src={image} style={{ width: "100%" }} />
              <h2>
                <Link to="">{title}</Link>
              </h2>
              <h2>{price}</h2>
              <p>{description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default CategoryList;

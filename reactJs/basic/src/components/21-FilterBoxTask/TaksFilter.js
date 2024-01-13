import { Container } from "@mui/material";
import React, { useState } from "react";
import FilterProductList from "./ProductList";

const TaskFilter = () => {
  const [array, setArray] = useState([
    { image: "./images/av-1.png", price: 1000 },
  ]);
  return (
    <>
      <h2>Filter Task</h2>
      <Container
        sx={{
          display: "flex",
          
        }}
      >
        <FilterProductList array={array} />
        <FilterProductList array={array} />
        <FilterProductList array={array} />
        <FilterProductList array={array} />
        <FilterProductList array={array} />
        <FilterProductList array={array} />
        <FilterProductList array={array} />
        <FilterProductList array={array} />
        <FilterProductList array={array} />
      </Container>
    </>
  );
};
export default TaskFilter;

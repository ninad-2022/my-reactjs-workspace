import React from "react";
import GridListView from "./GridListView";

const GridListIndex = () => {
  const products = [
    { name: "Nike", price: 7000, description: "best show ever" },
    { name: "Adidas", price: 8000, description: "best show ever" },
    { name: "Puma", price: 6000, description: "best show ever" },
    { name: "Sketchers", price: 5000, description: "best show ever" },
    { name: "Campus", price: 4000, description: "best show ever" },
    { name: "Sparx", price: 3000, description: "best show ever" },
    { name: "Asics", price: 9000, description: "best show ever" },
  ];
  return (
    <>
      <GridListView products={products} />
    </>
  );
};

export default GridListIndex;

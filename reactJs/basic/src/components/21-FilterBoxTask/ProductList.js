import React from "react";

// 1.1 making a product list
const FilterProductList = ({ array }) => {
  return (
    <>
      {Array.isArray(array) &&
        array.map((item, index) => {
          return (
            <div
              key={item + index}
              style={{
                height: 200,
                width: 200,
                padding: "5px",
                border: "2px solid black",
              }}
            >
              <img src={item.image} style={{ width: "100%" }} />
              <h2>price: {item.price}</h2>
            </div>
          );
        })}
    </>
  );
};

export default FilterProductList;

import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

const ShoppingList = ({ products }) => {
  const [viewMode, setViewMode] = useState("list");
  const toggleViewMode = useCallback(
    () => setViewMode((viewMode) => (viewMode === "list" ? "grid" : "list")),
    []
  );

  const renderProduct = useCallback(
    ({ name, price, description }, index) => {
      if (viewMode === "list") {
        return (
          <div
            key={index}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              margin: "10px",
            }}
          >
            <div style={{ width: "50%" }}>
              <h3>{name}</h3>
              <p>{price}</p>
            </div>
            <div style={{ width: "50%" }}>
              <p>{description}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
              margin: "10px",
            }}
          >
            <img
              src="cart.png"
              alt="Cart"
              style={{ width: "100px", height: "100px" }}
            />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
          </div>
        );
      }
    },
    [viewMode]
  );

  return (
    <div>
      <button onClick={toggleViewMode}>Toggle View</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(renderProduct)}
      </div>
    </div>
  );
};

ShoppingList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(ShoppingList);

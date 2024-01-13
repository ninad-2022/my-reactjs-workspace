import React, { Component } from "react";
import Product from "./Product";
import PropsTypesDemo from "./PropsTypesDemo";

class PropsDemo extends Component {
  render() {
    return (
      // <PropsTypesDemo title="abcd" status={10} />
      //below is child component which has the input values that stores inside the props which can be use at parent. see Product.js
      <>
        <h2>Props Demo</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Product
            title="Product 1"
            price={1001}
            desc="sameple desc kjdhjkgfskh iugrigu er ruigr ureger g uiegrug "
          />
          <Product
            title="Product 2"
            price={2001}
            desc="sameple desc kjdhjkgfskh i
              ugrigu er ruigr ureger g uiegrug "
          />
          <Product
            title="Product 3"
            price={3001}
            desc="sameple desc kjdhjkgfskh iugrigu er ruigr ureger g uiegrug "
          />
          <Product
            title="Product 4"
            price={4001}
            desc="sameple desc kjdhjkgfskh iugrigu er ruigr ureger g uiegrug "
          />
        </div>
      </>
    );
  }
}

export default PropsDemo;

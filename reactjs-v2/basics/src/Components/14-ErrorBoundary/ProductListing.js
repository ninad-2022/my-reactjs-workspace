import React from "react";
import ErrorHandler from "./ErrorHandler";
import Product from "./Product";
const ProductListing = () => {
  return (
    <>
      <h2>Product Listing</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <ErrorHandler>
          <Product
            id={1}
            title="AAAA"
            brand="aaaa"
            price={100}
            desc="sample aaaa desc"
          />
        </ErrorHandler>
        <ErrorHandler>
          <Product
            id={2}
            title="BBBB"
            brand="bbbb"
            price={200}
            desc="sample bbbb desc"
          />
        </ErrorHandler>
        <ErrorHandler>
          <Product
            id={3}
            title="CCCC"
            brand="cccc"
            // price={300} //
            desc="sample cccc desc"
          />
        </ErrorHandler>
      </section>
    </>
  );
};
export default ProductListing;

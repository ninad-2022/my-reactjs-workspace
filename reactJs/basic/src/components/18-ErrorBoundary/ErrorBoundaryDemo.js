import React from "react";
import ErrorHandler from "./ErrorHandler";
import Product from "./Product";

const ErrorBoundaryDemo = () => {
  return (
    <>
      <h2>Error Boundary Demo</h2>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        {/* 2.2- use ErrorHandler here. write seprate for the each error */}
        <ErrorHandler>
          <Product
            title="aaa"
            brand="AAA"
            price={1111}
            desc="32432478437768527"
          />
        </ErrorHandler>
        <ErrorHandler>
          <Product title="aaa" brand="AAA" desc="32432478437768527" />
        </ErrorHandler>
        <ErrorHandler>
          <Product
            title="aaa"
            brand="AAA"
            price={1111}
            desc="32432478437768527"
          />
        </ErrorHandler>
        <ErrorHandler>
          <Product
            title="aaa"
            brand="AAA"
            price={1111}
            desc="32432478437768527"
          />
        </ErrorHandler>
      </section>
    </>
  );
};

export default ErrorBoundaryDemo;

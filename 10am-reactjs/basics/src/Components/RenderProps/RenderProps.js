import React from "react";
import Counter from "./Counter";
import Mouse from "./Mouse";
import Position from "./Position";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";
const RenderProps = () => {
  return (
    <>
      <h2>Render Props</h2>
      <Mouse
        render={(position) => {
          return <Position {...position} />;
        }}
      />
      <Counter
        render={(count, inc, dec) => {
          return <TotalCars total={count} buy={inc} sell={dec} />;
        }}
      />
      <hr />
      <Counter>
        {(count, inc, dec) => {
          return <TotalBikes count={count} increment={inc} decrement={dec} />;
        }}
      </Counter>
    </>
  );
};

export default RenderProps;

// using the logic into the on the component
import React from "react";
import Counter from "./Counter";
import Mouse from "./Mouse";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";
import Cat from "./Cat";
const RenderProps = () => {
  return (
    <>
      <Mouse
        ravindra={(position) => {
          return <Cat {...position} />;
        }}
      />
      <h1>Render Props</h1>
      <hr />
      <Counter
        render={(count, incre, decr) => {
          return (
            <TotalBikes counter={count} increment={incre} decrement={decr} />
          );
        }}
      />

      <Counter>
        {(counter, daldo, nikaldo) => {
          return <TotalCars count={counter} buy={daldo} sell={nikaldo} />;
        }}
      </Counter>
    </>
  );
};
export default RenderProps;

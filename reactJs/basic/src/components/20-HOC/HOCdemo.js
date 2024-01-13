import React from "react";
import TotalLaptops from "./TotalLaptops";
import TotalMobiles from "./TotalMobiles";
const HOCDemo = () => {
  return (
    <>
      <h1>HOC Demo</h1>
      <hr />
      <TotalMobiles />
      <hr />
      <TotalLaptops />
    </>
  );
};
export default HOCDemo;

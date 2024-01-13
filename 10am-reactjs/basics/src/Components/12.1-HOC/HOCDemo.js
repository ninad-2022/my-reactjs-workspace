import React from "react";
import TotalFemale from "./TotalFemale";
import TotalMale from "./TotalMale";
const HOCDemo = () => {
  return (
    <>
      <h2>HOC Demo</h2>
      <TotalFemale />
      <hr />
      <TotalMale />
    </>
  );
};

export default HOCDemo;

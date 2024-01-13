import React, { useState } from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
const PureComponents = () => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  return (
    <>
      <h2>Pure Component</h2>
      <input type="text" onChange={(e) => setLocation(e.target.value)} />

      <br />
      <button onClick={() => setCity(location)}>set City</button>
      <ClassComp city={city} />
      <FuncComp city={city} />
    </>
  );
};
export default PureComponents;

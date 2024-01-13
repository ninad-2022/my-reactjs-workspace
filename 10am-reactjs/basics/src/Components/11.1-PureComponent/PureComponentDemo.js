import React, { useState } from "react";
import ClassChild from "./ClassChild";
import FunChild from "./FunChild";

const PureComponetDemo = () => {
  console.log("PureParent");
  const [city, setCity] = useState("Pune");
  const [value, setValue] = useState("");
  const [address, setAddress] = useState({
    city: "",
    state: "Maharashtra",
  });

  const addCity = () => {
    setCity(value);
    setAddress({ ...address, city: value });
  };
  return (
    <>
      <h3>Pure Component</h3>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={addCity}>Add</button>
      <hr />
      <ClassChild city={city} address={address} />
      <FunChild city={city} address={address} />
    </>
  );
};

export default PureComponetDemo;

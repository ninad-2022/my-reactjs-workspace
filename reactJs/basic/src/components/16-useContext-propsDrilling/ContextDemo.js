import React, { useState } from "react";
import A from "./A";
import CountryContext from "./CountryContext";
const ContextDemo = () => {
  const [country, setCountry] = useState("India");

  //1.1- maintaining state for the props drilling
  const [city, setCity] = useState("Pune");
  return (
    <>
      <h2>ContextDemo compoenent</h2>

      {/*2.1- here we are providing the value from  the countryContext and have to consume into the D*/}
      <CountryContext.Provider value={country}>
        {/*1.2- giving props for props drilling  */}
        <A city={city} />
      </CountryContext.Provider>
    </>
  );
};

export default ContextDemo;

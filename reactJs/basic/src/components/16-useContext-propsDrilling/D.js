import React, { useContext, useState } from "react";
import CountryContext from "./CountryContext";
const D = ({ city }) => {
  // 3.1- useContext() here we directly get the value
  const country = useContext(CountryContext);
  return (
    <>
      <h2>
        {/*3.2- see {country} has the value of the country  */}D component, City
        is {city}, country = {country}
      </h2>

      {/* 2.2- consuming it here.
      <CountryContext.Consumer>
        2.3- passing a callback. create a object then ass a callback
        {(country) => {
          return <h2>Country: {country}</h2>;
        }}
      </CountryContext.Consumer>
       */}
    </>
  );
};

export default D;

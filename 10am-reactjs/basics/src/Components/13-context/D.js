import React, { useContext } from "react";
import CityContext from "./CityContext";
const D = () => {
  const [title, city] = useContext(CityContext);

  return (
    <>
      <h3>
        D Component:- {city}, city:- {title} -
      </h3>
    </>
  );
};

export default D;

import React, { useState } from "react";
import A from "./A";
import CityContext from "./CityContext";
const Parent = () => {
  const [title] = useState("Topper skills");
  const [city] = useState("Pune");
  return (
    <>
      <h2>Parent Component</h2>
      {/* if you didnt give the provider then it will give default value given in  CityContext  */}

      <CityContext.Provider value={[title, city]}>
        <A title={title} />
      </CityContext.Provider>
    </>
  );
};

export default Parent;

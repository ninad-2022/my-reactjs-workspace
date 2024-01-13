import React, { useState } from "react";

const AddCity = ({ getCity, getThis }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <h2>Add city</h2>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => getCity(city)}>Add city</button>
    </>
  );
};

export default AddCity;

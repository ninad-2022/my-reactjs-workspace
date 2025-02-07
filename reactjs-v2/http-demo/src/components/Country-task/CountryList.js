import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import Country from "./Country";
const CountryList = () => {
  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((response) => {
        setAllCountry(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const search = e.target.value;
    axios
      .get(`https://restcountries.com/v2/name/${search}`)
      .then((response) => {
        setAllCountry(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectRegion = (e) => {
    const regionName = e.target.value;
    let url = "https://restcountries.com/v2/all";
    if (regionName && regionName != "All")
      url = `https://restcountries.com/v2/region/${regionName}`;
    axios
      .get(url)
      .then((response) => {
        setAllCountry(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="search country name"
        />
        <select onChange={selectRegion}>
          <option>All</option>
          <option>Asia</option>
          <option>Oceania</option>
          <option>Europe</option>
          <option>Africa</option>
          <option>Americas</option>
        </select>
      </div>
      <div>
        <h2>Country List</h2>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.isArray(allCountry) &&
            allCountry.map((coun, i) => <Country {...coun} key={i} />)}
        </ul>
      </div>
    </>
  );
};

export default CountryList;

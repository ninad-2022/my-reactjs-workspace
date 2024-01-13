import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import API from "../../api/CountryApi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isCountry, setisCountry] = useState(true);
  const [filterName, setName] = useState();

  useEffect(() => {
    API.get(`/all`).then((respo) => {
      setCountries(respo?.data);
    });
  }, []);
  useEffect(() => {
    if (isCountry) {
      API.get(`/name/${filterName}?fullText=true`).then((respo) => {
        setCountries(respo?.data);
      });
    } else {
      API.get(`/capital/${filterName}`).then((respo) => {
        setCountries(respo?.data);
      });
    }
  }, [filterName]);

  useEffect(() => {
    if (isCountry) {
      API.get(`/callingcode/${filterName}?fullText=true`).then((respo) => {
        setCountries(respo?.data);
      });
    } else {
      API.get(`lang/${filterName}`).then((respo) => {
        setCountries(respo?.data);
      });
    }
  }, [filterName]);

  const columns = [
    {
      name: "name",
      lable: "Country Name",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      name: "capital",
      lable: "Capital",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      name: "nativeName",
      lable: "nativeName",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      name: "area",
      lable: "area",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "region",
      lable: "region",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "flag",
      lable: "flag",
      options: {
        sort: true,
        filter: false,
      },
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setisCountry(!isCountry);
    setName(value);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Country List</h1>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Select </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          row
          style={{ padding: 20 }}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="all"
            onClick={handleChange}
          />
          <FormControlLabel
            value="country"
            control={<Radio />}
            label="country"
            onClick={handleChange}
          />
          <FormControlLabel
            value="capital"
            control={<Radio />}
            label="capital"
            onClick={handleChange}
          />
          <FormControlLabel
            value="callingcode"
            control={<Radio />}
            label="callingcode"
            onClick={handleChange}
          />
          <FormControlLabel
            value="lang"
            control={<Radio />}
            label="lang"
            onClick={handleChange}
          />
        </RadioGroup>
      </FormControl>
      <input
        type="text"
        name="inpt"
        onChange={handleChange}
        style={{ padding: 5 }}
      />
      <MUIDataTable title="Country List" data={countries} columns={columns} />
    </>
  );
};

export default Country;

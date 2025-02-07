import React from "react";
import { Link } from "react-router-dom";
const Country = ({
  name,
  alpha2Code,
  callingCodes,
  capital,
  region,
  flags,
}) => {
  return (
    <>
      <section>
        <div
          style={{
            border: "1px solid #999",
            margin: 5,
            padding: 5,
            width: "300px",
          }}
        >
          <img src={flags.svg} style={{ width: "100%" }} />
          <Link to="country-details">
            <p>{name}</p>
          </Link>
          <p>
            {callingCodes}-{alpha2Code}
          </p>
          <h5>
            {capital}, {region}
          </h5>
        </div>
      </section>
    </>
  );
};

export default Country;

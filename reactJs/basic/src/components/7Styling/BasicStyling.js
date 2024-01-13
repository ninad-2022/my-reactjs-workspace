import React, { useState } from "react";
import Style from "./style.module.css";
import "./style.css";
import "./style2.css";

const BasicStyling = () => {
  const [isError, setError] = useState(true);
  return (
    <div>
      <h2
        style={{
          backgroundColor: "orange",
          padding: 10,
        }}
      >
        Basic Styling
      </h2>
      <p className="para">{"sample content".repeat(50)}</p>
      <p className={`${Style.para} ${Style.focus}`}>
        {"sample content-2".repeat(50)}
      </p>
      <h2 className={isError ? Style.error : Style.success}>Sample message</h2>
    </div>
  );
};

export default BasicStyling;

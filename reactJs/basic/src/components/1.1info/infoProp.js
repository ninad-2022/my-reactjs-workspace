import React, { Component } from "react";
import Info from "./info";

class InfoProps extends Component {
  render() {
    return (
      <div>
        <h2>Info-Props</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Info
            name="Ninad"
            mobile="10210210"
            email="ninad@gmail.com"
            city="Mumbai"
          />
          <Info
            name="Ram"
            mobile="10210210"
            email="ram@gmail.com"
            city="Delhi"
          />
          <Info
            name="Rakesh"
            mobile="10210210"
            email="Rakesh@gmail.com"
            city="Banglore"
          />
          <Info
            name="Lol"
            mobile="10210210"
            email="Lol@gmail.com"
            city="Pune"
          />
        </div>
      </div>
    );
  }
}

export default InfoProps;

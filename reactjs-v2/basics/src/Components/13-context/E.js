import React from "react";
import CityContext from "./CityContext";
class E extends React.Component {
  render() {
    return (
      <div>
        <h2>E Component</h2>
        <CityContext.Consumer>
          {(city) => {
            return <h4>E comp, city {city}</h4>;
          }}
        </CityContext.Consumer>
      </div>
    );
  }
}

export default E;

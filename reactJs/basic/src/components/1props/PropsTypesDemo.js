import React, { Component } from "react";
import PropTypes from "prop-types";
class PropsTypesDemo extends Component {
  render() {
    return (
      <div>
        <h2>Props Types Demp</h2>
      </div>
    );
  }
} //Component is end here

PropsTypesDemo.Prototype = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf([true, false]),
};

export default PropsTypesDemo;

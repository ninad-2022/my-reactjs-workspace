import React from "react";
class heading extends React.Component {
  render() {
    return (
      <h2 style={{ backgroundColor: "#ddd", padding: "3px 20px" }}>
        {this.props.children}
      </h2>
    );
  }
}
export default heading;

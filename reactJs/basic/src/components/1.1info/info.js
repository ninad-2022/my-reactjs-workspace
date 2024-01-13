import React, { Component } from "react";

class Info extends Component {
  render() {
    const { name, mobile, email, city } = this.props;
    return (
      <div
        style={{
          width: 200,
          height: 300,
          border: "2px solid #000",
          padding: 10,
          margin: 10,
        }}
      >
        <h2>Name:- {name}</h2>
        <h5>Mobile:- {mobile}</h5>
        <h4>Email:- {email}</h4>
        <h4>City:- {city}</h4>
      </div>
    );
  }
}
export default Info;

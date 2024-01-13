import React, { Component } from "react";
import ChildComp from "./ChildComp";
class ParentComp extends React.Component {
  state = {
    province: "mh",
    showChild: false,
  };
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <button
          onClick={() =>
            this.setState((state) => ({ showChild: !state.showChild }))
          }
        >
          toggle
        </button>
        <select onChange={(e) => this.setState({ province: e.target.value })}>
          <option value="mh">Maharashtra</option>
          <option value="mp">MP</option>
          <option value="kr">Karnataka</option>
          <option value="gj">Gujrat</option>
        </select>
        <hr />
        {/* <ChildComp province={this.state.province} /> */}
        {this.state.showChild && <ChildComp province={this.state.province} />}
      </div>
    );
  }
}

export default ParentComp;

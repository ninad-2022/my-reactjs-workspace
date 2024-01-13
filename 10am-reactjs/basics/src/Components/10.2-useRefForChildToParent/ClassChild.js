import React, { Component } from "react";
class ClassChild extends Component {
  sayHello() {
    alert("Hello,class child component");
  }
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <button onClick={this.props.print}>call parent method</button>
      </div>
    );
  }
}

export default ClassChild;

// it is a child Component
import React, { Component } from "react";
class ClassComp extends Component {
  //1.1- we have to call this method of the child component
  getName(Name) {
    alert("Hello" + Name);
  }
  render() {
    return (
      <div>
        {/* 1.3- calling a method from the parent into teh child  */}
        <button onClick={() => this.props.greet()}>Parent Method</button>
      </div>
    );
  }
}
export default ClassComp;

import React from "react";
class ClassChild extends React.Component {
  sayHello() {
    alert("Hello!, from class child component");
  }
  render() {
    return (
      <div>
        <h2>Class Child Component</h2>
        <button onClick={this.props.print}>Call parent method</button>
      </div>
    );
  }
}

export default ClassChild;

import React, { Component } from "react";
class ClassChild extends React.Component {
  inputRef = React.createRef();

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2>Class Child</h2>
        <input type="text" ref={this.inputRef} placeholder="class child" />
      </div>
    );
  }
}

export default ClassChild;

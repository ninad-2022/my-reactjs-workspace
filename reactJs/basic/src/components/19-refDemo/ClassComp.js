import React from "react";
class ClassComp extends React.Component {
  //accessing child node in the class Comp
  inputRef = React.createRef();

  focusInput() {
    //for focusing on the node
    this.inputRef.current.focus();
  }
  render() {
    return (
      <>
        <h2>Class Comp</h2>

        {/* assigning ref to the input  */}
        <input ref={this.inputRef} />
      </>
    );
  }
}

export default ClassComp;

import React, { Component } from "react";
class ClassComp extends React.Component {
  state = {
    name: "Topper Skills",
  };

  // method - 1 to do bind for anonymous and named function
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
  }

  //method-1 as we are making a anonymous function, this function will refer to the context where it called therefor binding is require
  handleClick() {
    alert("Hello" + this.state.name);
  }

  // method-2 use arrow function
  //   handleClick =()=>{
  //       alert("Hello" + this.state.name)
  //   }

  render() {
    return (
      <>
        {/* making a button and passing a function into it  */}
        {/* here we are not calling the function so we need binding, use constructor for that  */}
        {/* <button onClick={this.handleClick}>Greet</button> */}

        {/* method-3 use the arrow function here and call the function  */}
        <button onClick={() => this.handleClick()}>Greet</button>
      </>
    );
  }
}

export default ClassComp;

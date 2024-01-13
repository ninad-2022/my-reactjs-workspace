import React, { Component, Fragment } from "react";
class FragmentDemo extends React.Component {
  render() {
    return (
      <>
        <h2>Sample title</h2>
        <p>Sample sub titile</p>
      </>
      // you can use below but above is recommened
      // <Fragment></Fragment>
      // <React.Fragment></React.Fragment>
    );
  }
}

export default FragmentDemo;

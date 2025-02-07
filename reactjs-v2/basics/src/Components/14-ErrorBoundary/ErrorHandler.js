import React, { Component } from "react";
class ErrorHandler extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("Error:-", error);
    console.log("Info:-", info);
  }

  render() {
    return this.state.hasError ? (
      <h3>Something went wrong</h3>
    ) : (
      this.props.children
    );
  }
}
export default ErrorHandler;

import React from "react";
class ErrorHandler extends React.Component {
  state = { isError: false };

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return this.state.isError ? (
      <div>somethig is wrong</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorHandler;

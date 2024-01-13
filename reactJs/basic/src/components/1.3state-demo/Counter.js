import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    //  this.state.count++
    // below will not work
    // this.setState({ count: this.state.count + 10 });
    // this.setState({ count: this.state.count + 20 });
    // this.setState({ count: this.state.count + 30 });
    // console.log(this.state.count);

    this.setState((state, props) => {
      return {
        count: state.count + 10,
      };
    });

    this.setState((state) => ({
      count: state.count + 10,
    }));
    this.setState((state) => ({
      count: state.count + 10,
    }));
  };

  decrement = () => {
    //  this.state.count++
    this.setState({ count: this.state.count - 10 });
    // console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <h2>Count:{this.state.count}</h2>
        <br />
        <button onClick={this.increment}>++</button>
        <button onClick={this.decrement}>--</button>
      </div>
    );
  }
}

export default Counter;

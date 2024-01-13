import React, { Component } from "react";
class ChildComp extends React.Component {
  state = {
    name: "Topper Skills",
    province: {
      mh: ["pune", "Mumbai", "Nashik", "Satara"],
      mp: ["Bhopal", "Indore", "Ujjain", "Gwalior"],
      gj: ["Surat", "GandhiNagar", "Manglore"],
      kr: ["Banglore", "mysore", "Manglore", "Kolar"],
    },
    cities: [],
  };

  constructor() {
    super();
    console.log("constructor");
    //state initializing in old days
    // this.state={}

    // binding event handlers
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("hello" + this.state.name);

    // - this method gets ececuted during each rendering
    // - this method is used to upadtae the this.state, based on the props reciveved from parent compoenent
    // - you need to return an objct ot null
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    const province = nextProps.province;
    return { cities: prevState.province[province] };
  }

  render() {
    console.log("render()");
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <h2>Child Component -{this.state.count}</h2>
        <ul>
          {this.state.cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
  }

  getSnapshotBeforeUpdate(nextProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return "abcd";
  }
  componentDidUpdate(nextProps, prevState, snapShot) {
    console.log("componentDidUpdate: ", snapShot);
  }

  // - this method will get executed only once after the mounting/inserting the Component in the DOM
  // - this method is used to perform one timeinitiliazation operations like initiating TimeRanges, fetching data from ServiceWorkerRegistration, etc.

  componentDidMount() {
    console.log("componentDidMount");

    this.timer = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
}

export default ChildComp;

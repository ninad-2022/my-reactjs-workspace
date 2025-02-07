import React from "react";
class ClassChild extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.city == nextProps.city) return false;
    return true;
  }
  render() {
    console.log("ClassChild");
    return (
      <div>
        <h3>
          Class Child, {this.props.city}, state = {this.props.address?.state}
        </h3>
      </div>
    );
  }
}
export default ClassChild;

import React from "react";

// making a pure component by using React.PureComponent
class ClassComp extends React.PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.address.city == this.props.address.city) return false;
    else return true;
  }
  render() {
    console.log("ClassComp");
    return (
      <>
        <h2>Class Component- {this.props.address.city}</h2>
        {/* <h2>Class Component- {this.props.city}</h2> */}
      </>
    );
  }
}

export default ClassComp;

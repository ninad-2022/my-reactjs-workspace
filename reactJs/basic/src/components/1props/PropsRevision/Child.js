import React from "react";

const Child = ({ location, greet }) => {
  // 1.4- pass props into the component as an argument nd use parents' props here
  //but we reccomend to not to use this, instead of this you can directly take a object into the parameter braceket
  //   const { location, greet } = props;
  return (
    <>
      {/* 1.5 passing the porps here which has the values of parent */}
      <h1>Child Component of {location}</h1>
      <button onClick={greet}>Greetings</button>
    </>
  );
};

export default Child;

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  //step 3- passing thats props into callBack nd returning an object
  //destructing the props, it use in the properties below
  container: ({ color, width, height }) => ({
    backgroundColor: color,
    width: width,
    height: height,
    border: "2px solid",
    borderRadius: 10,
    margin: "auto",
  }),
});

const DynamicStyle = () => {
  //step 1- creating a state for maintaining a initial values
  const [styles, setStyles] = useState({
    color: "red",
    width: 200,
    height: 200,
  });
  //step 2- using spread operator for copying all the values into properties (classes)
  //these properties are now avaialabe into useStyles
  const Classes = useStyles({...styles});

  const handleWidthChange = (value) => {
    console.log("width: ", value);
    setStyles({ ...styles, width: parseInt(value) });
  };
  return (
    <>
      <div className={Classes.container}>
        {styles.width}
        <input
          type="range"
          min="100"
          max="500"
          onChange={(e) => handleWidthChange(e.target.value)}
        />
      </div>

      {/* <div className={Classes.container}></div> */}
      {/* creating a buttons for changing the state values, after changing the state values, these states are availabe into the classes and it will directly availabe into useStyles({}),*/}
      <button onClick={() => setStyles({ ...styles, color: "red" })}>
        Red
      </button>
      <button onClick={() => setStyles({ ...styles, color: "Green" })}>
        Green
      </button>
      <button onClick={() => setStyles({ ...styles, color: "blue" })}>
        Blue
      </button>
      <button onClick={() => setStyles({ ...styles, width: 400 })}>
        Change-Width
      </button>
    </>
  );
};
export default DynamicStyle;

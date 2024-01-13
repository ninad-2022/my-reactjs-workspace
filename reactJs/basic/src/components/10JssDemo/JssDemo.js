import React from "react";

// importing a function
import { createUseStyles } from "react-jss";
import DynamicStyle from "./DynamicStyle";

// Calling it into useStyles as it returns a hook
const useStyles = createUseStyles({
  // writing a properties in the form of object (in css we call it classes)
  title: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 10,
    "&:hover": {
      backgroundColor: "orange",
    },
  },
  container: {
    width: 300,
    height: 300,
    backgroundColor: "cyan",
    border: "2px solid #000",
    margin: "auto",
  },
});

const JssDemo = () => {
  // calling that function inside a variable which will reuturn properties
  const classes = useStyles();
  return (
    <>
      {/* using that classes here, classes.title */}
      <h2 className={classes.title}>React JSS demo</h2>
      <div className={classes.container}></div>
      <DynamicStyle />
    </>
  );
};

export default JssDemo;

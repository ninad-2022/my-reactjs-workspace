import React from "react";
//Method-1.1: importing makeStyles hooks from '@mui/styles'
import { makeStyles, styled } from "@mui/styles";
import Box from "@mui/material/Box";

//Method-1.2: creating a function for properties (classes)
const useStyles = makeStyles({
  title: {
    // Method-1.5: using that color value here
    backgroundColor: ({ bgcolor }) => bgcolor,
    color: "#fff",
    padding: "5px 10px",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
});

// Method-2.1- creating independent component by using styled
const CustomDiv = styled("div")({
  width: 200,
  height: 200,
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "orange",
  },
});

const StyleInMui = () => {
  // Method-1.4: passing color values
  const classes = useStyles({ bgcolor: "green" });
  return (
    <>
      {/*Method-1.3: using that properties here on <h2></h2> */}
      <h2 className={classes.title}>Style in</h2>

      {/* Method-2.2- using that independent component */}
      <CustomDiv>
        {/* here we are using sx(sytem component) */}
        <Box component="h1" sx={{ backgroundColor: "blue" }}>
          spample component
        </Box>
      </CustomDiv>
      <Box
        Component="section"
        sx={{
          width: 200,
          height: 200,
          backgroundColor: { xs: "pink", md: "green" },
        }}
      ></Box>
    </>
  );
};
export default StyleInMui;

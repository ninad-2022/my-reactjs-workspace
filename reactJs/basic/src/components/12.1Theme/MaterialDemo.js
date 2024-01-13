import React from "react";
import MUITheme from "./MUIThem";

// import these two essentail functions and use it
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";

const MaterialDemo = () => {
  //1.1- customizing the theme
  //1.1- create a theme
  const mytheme = createTheme({
    palette: {
      primary: {
        main: "#F1C40F",
      },
      secondary: {
        main: "#ff0000",
      },
    },

    // you can add your own properties in it
    myThemeColor: "#f00",
  });
  return (
    <>
      <h2>MaterialDemo</h2>

      {/* 1.2- pass that theme into ThemeProvider.
      always provide these theme to the root componenet so that we can use it anywhere
      theme prop i.e theme={themeName} is essential for passing customize theme  */}
      <ThemeProvider theme={mytheme}>
        {/*1.3- pass the file inside it, on which are using the theme  */}
        <MUITheme />
      </ThemeProvider>
    </>
  );
};
export default MaterialDemo;

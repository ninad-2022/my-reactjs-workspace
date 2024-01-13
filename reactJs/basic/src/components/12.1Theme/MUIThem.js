import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.secondary,
  },
}));

const MUITheme = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>MUI-Theme</h1>
      <Box //use Box for the sx
        sx={{
          //  here we are passing a callback into the sx
          backgroundColor: (theme) => theme.palette.primary.main,
          // color: "secondary.main",
          color: "myThemeColor",
        }}
      >
        <h2>Customize theme Color</h2>
        {"ninad"}
      </Box>
    </>
  );
};
export default MUITheme;

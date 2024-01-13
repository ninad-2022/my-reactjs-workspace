import React from "react";
import Button from "@mui/material/Button"; //its recommended
//import { Button } from "@mui/material";its not recommended
const Basic = () => {
  return (
    <>
      <h2>Buttons</h2>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};
export default Basic;

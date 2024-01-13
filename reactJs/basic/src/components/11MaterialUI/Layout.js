import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Layout = () => {
  return (
    <>
      <h2>Layout</h2>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="powderblue">
              One
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="red">
              Two
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="green">
              Three
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="yellow">
              Four
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Layout;

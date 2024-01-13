import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddUser = ({ getUser }) => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:-", user);
    getUser(user);
  };

  return (
    <Container>
      <h2>Add user</h2>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
              value={user?.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Mobile"
              name="mobile"
              value={user?.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              name="email"
              value={user?.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddUser;

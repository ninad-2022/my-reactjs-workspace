import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import axios from "axios";

const UserForm = ({ handleClose, loadUsers, initialUser, operation }) => {
  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    status: 1,
    age: 0,
    city: "",
  });
  useEffect(() => {
    if (initialUser) setUsers({ ...initialUser });
  }, [initialUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
  };
  const handleSubmit = () => {
    console.log("user", user);
    if (operation == "edit") {
      axios
        .put(`http://localhost:8080/users/${user.id}`, user)
        .then((response) => {
          handleClose();
          loadUsers();
          alert("User Updated...");
        })
        .catch((err) => {
          console.log(err);
          alert("could not update the user");
        });
    } else {
      axios
        .post("http://localhost:8080/users", user)
        .then((response) => {
          handleClose();
          loadUsers();
          alert("User created...");
        })
        .catch((err) => {
          console.log(err);
          alert("could not created the user");
        });
    }
  };
  return (
    <>
      <h2>CRUD Operations</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="City"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Age"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Mobile"
            name="mobile"
            type="tel"
            value={user.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              value={user.status}
              name="status"
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            {operation == "edit" ? "Update" : "Create"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserForm;

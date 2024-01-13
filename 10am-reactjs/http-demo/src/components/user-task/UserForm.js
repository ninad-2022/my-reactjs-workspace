import React, { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import UserContext from "./UserContext";
import API from "../../api/API";

const UserForm = () => {
  const { loadUsers, handleClose, operation, initialUser } =
    useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
    city: "",
  });

  useEffect(() => {
    if (initialUser) setUser({ ...user, ...initialUser });
  }, [initialUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (operation == "edit") {
      API.put(`/users/${user.id}`, user)
        .then((response) => {
          alert("User updated...");
          loadUsers();
          handleClose();
        })
        .catch((err) => {
          console.log(err);
          alert("Could not updated the user");
        });
    } else {
      API.post("/users", user)
        .then((response) => {
          alert("User created...");
          loadUsers();
          handleClose();
        })
        .catch((err) => {
          console.log(err);
          alert("Could not created the user");
        });
    }
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="name"
            fullWidth
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Mobile"
            fullWidth
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="City"
            fullWidth
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              value={user.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserForm;

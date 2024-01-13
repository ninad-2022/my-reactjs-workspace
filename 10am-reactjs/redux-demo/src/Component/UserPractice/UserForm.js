import React, { useState } from "react";
import TextFiled from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addUser } from "../../app/slices/UserSlicePractice";

const UserForm = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    dispatch(addUser(user));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextFiled
          fullWidth
          name="name"
          label="Name"
          variant="outlined"
          value={user.value}
          onChange={handleChange}
          color="warning"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFiled
          fullWidth
          name="mobile"
          label="Mobile"
          variant="outlined"
          value={user.mobile}
          onChange={handleChange}
          color="warning"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFiled
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          value={user.email}
          onChange={handleChange}
          color="warning"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFiled
          fullWidth
          name="password"
          label="Password"
          variant="outlined"
          value={user.password}
          onChange={handleChange}
          color="warning"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="warning"
          onClick={handleClick}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  addUser,
  udpateUser as upUserAction,
} from "../../app/slices/UserSlice";

const UserForm = ({ onClose, updateUser, operation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setUser({ ...user, ...updateUser });
  }, [updateUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    // console.log("user:- ", user);
    // dispatch an addUser action with payload for that import useDispatch()
    // dispatch(addUser(user));
    if (operation == "edit") dispatch(upUserAction(user));
    else dispatch(addUser(user));
    onClose();
  };
  return (
    <>
      <h2>User form</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            value={user.value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="mobile"
            label="Mobile"
            variant="outlined"
            value={user.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="password"
            label="Password"
            variant="outlined"
            value={user.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleSubmit} fullWidth variant="contained">
            Create
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserForm;

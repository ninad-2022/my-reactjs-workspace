import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import UserContext from "./UserContext";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const UserForm = () => {
  const { open, handleClose, operation, initialUser, loadUsers } =
    useContext(UserContext);

  const [user, setUser] = useState({ status: 1, gender: "male" });
  const [profilePic, setProfilePic] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // convert binary into base64
    const reader = new FileReader();

    reader.onload = function () {
      setProfilePic(reader.result);
    };

    if (file) reader.readAsDataURL(file);

    setUser({ ...user, avatar: file });
  };

  const handleSubmit = () => {
    console.log("User: ", user);

    const fd = new FormData();

    for (const prop of Object.keys(user)) {
      fd.append(prop, user[prop]);
    }

    if (operation == "edit") {
      axios
        .put(`http://localhost:8888/users/${user._id}`, fd)
        .then((response) => {
          loadUsers();
          handleClose();
          alert("User updated");
        })
        .catch((err) => {
          alert("could not updated");
        });
    } else {
      // create the user
      axios
        .post(`http://localhost:8888/users`, fd)
        .then((response) => {
          loadUsers();
          handleClose();

          alert("User created");
        })
        .catch((err) => {
          alert("could not created");
        });
    }
  };

  useEffect(() => {
    if (initialUser._id) setUser({ ...user, ...initialUser });
  }, [initialUser]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            width: 200,
            margin: "auto",
            marginBottom: 2,
            border: "1px solid #9999",
            position: "relative",
          }}
        >
          <IconButton sx={{ position: "absolute", right: 0, top: 0 }}>
            <label htmlFor="avatar">
              <EditIcon />
            </label>
          </IconButton>
          <img
            style={{ width: "100%" }}
            src={
              operation == "edit" && typeof user.avatar == "string"
                ? `http://localhost:8888/${user.avatar}`
                : profilePic
                ? profilePic
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ display: "none" }}
          type="file"
          id="avatar"
          fullWidth
          variant="outlined"
          label="Avatar"
          name="avatar"
          onChange={handleFileChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Mobile"
          name="mobile"
          value={user.mobile}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Age"
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="gender">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender"
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
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="status"
            value={user.status}
            label="Status"
            name="status"
            onChange={handleChange}
          >
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}>Inactive</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {operation == "edit" ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;

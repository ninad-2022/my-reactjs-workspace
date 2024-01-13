import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserProfile = ({
  avatar = "https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",
  firstName,
  lastName,
  email,
  mobile,
  age,
  status,
  city,
  id,
  handleUser,
  handleDelete,
}) => {
  return (
    <Box
      sx={{ border: "1px solid #333", padding: 5, margin: 2, width: 250 }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <img src={avatar} />
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>Email: {email}</h3>
      <h3>Mobile: {mobile}</h3>
      <h3>Age: {age}</h3>
      <h3>City: {city}</h3>
      <h3>Status: {status == 1 ? "Active" : "Inactive"}</h3>
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUser("edit", id)}
        >
          <EditIcon sx={{ marginRight: 1 }} /> Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(id)}
        >
          <DeleteIcon sx={{ marginRight: 1 }} /> Delete
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;

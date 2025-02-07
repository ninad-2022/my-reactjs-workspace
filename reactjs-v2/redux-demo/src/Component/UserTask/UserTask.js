import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserTask = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const [udpateUser, setUpdateUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [operation, setOperation] = useState("add");

  const handleClose = () => {
    setOpenDialog(false);
  };

  const createUser = () => {
    setOpenDialog(true);
  };

  const editUser = (user) => {
    setUpdateUser(user);
    setOperation("edit");
    setOpenDialog(true);
  };
  return (
    <>
      <h2>UserTask</h2>
      <Button variant="contained" color="primary" onClick={createUser}>
        New ++
      </Button>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <UserForm
            onClose={handleClose}
            udpateUser={udpateUser}
            operation={operation}
          />
        </DialogContent>
      </Dialog>
      <hr />
      <UserList editUser={editUser} />
    </>
  );
};

export default UserTask;

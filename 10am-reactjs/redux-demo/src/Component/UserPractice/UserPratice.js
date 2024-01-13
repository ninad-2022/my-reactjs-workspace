import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import UserForm from "./UserForm";
const UserPractice = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const closeDialog = () => {
    setOpenDialog(false);
  };
  const createDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <h2>UserPractice</h2>
      <Button variant="contained" color="warning" onClick={createDialog}>
        ++
      </Button>
      <Dialog open={openDialog} onClose={closeDialog}>
        <DialogTitle>User Form</DialogTitle>
        <DialogContent>
          <UserForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserPractice;

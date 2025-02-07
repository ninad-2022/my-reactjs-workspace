import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import UserForm from "./UserForm";
import UserContext from "./UserContext";

const AddEditUser = ({ open }) => {
  const { handleClose, operation } = useContext(UserContext);
  return (
    <>
      {/* opening of the Dialog is depend upon below boolean value prop  */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{operation == "edit" ? "Edit" : "Add"} User</DialogTitle>
        <DialogContent>
          <UserForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;

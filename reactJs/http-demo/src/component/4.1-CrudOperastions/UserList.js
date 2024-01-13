import axios from "axios";
import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import UserForm from "./UserForm";
import Swal from "sweetalert2";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [operation, setOperation] = useState("add");
  const [initialUser, setInitialUser] = useState({});

  const handleClose = () => {
    setOpenDialog(false);
  };

  const loadUsers = () => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const handleUser = (operation = "add", id) => {
    setOperation(operation);
    setOpenDialog(true);
    if (operation == "edit") {
      axios.get(`http://localhost:8080/users/${id}`).then((response) => {
        setInitialUser(response.data);
      });
    } else {
      setInitialUser({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        age: 0,
        status: "",
        city: "",
      });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure..?",
      text: "You won't be able to revert the record",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Cancel ",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/users/${id}`).then((response) => {
          loadUsers();
          Swal.fire("Deleted..!", "The user has been deleted!", "success");
        });
      }
    });
  };
  return (
    <>
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle> {operation == "edit" ? "Edit" : "Add"} User </DialogTitle>
        <DialogContent>
          <UserForm
            handleClose={handleClose}
            loadUsers={loadUsers}
            initialUser={initialUser}
            operation={operation}
          />
        </DialogContent>
      </Dialog>

      <Button variant="contained" onClick={() => handleUser("add")}>
        New +
      </Button>
      <section style={{ display: "flex" }}>
        {Array.isArray(users) &&
          users.map((user, i) => (
            <UserProfile
              key={user.id}
              {...user}
              handleUser={handleUser}
              handleDelete={handleDelete}
            />
          ))}
      </section>
    </>
  );
};
export default UserList;

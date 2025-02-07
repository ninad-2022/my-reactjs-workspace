import React, { useState, useEffect } from "react";
import MUIDatatable from "mui-datatables";
import Button from "@mui/material/Button";
import AddEditUser from "./AddEditUser";
import UserContext from "./UserContext";
import Swal from "sweetalert2";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import API from "../../api/API";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [operation, setOperation] = useState("add");
  const [initialUser, setInitialUser] = useState({});

  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const loadUsers = () => {
    API.get("/users")
      .then((response) => {
        setUser(response?.data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = () => {
    setInitialUser({});
    setOperation("add");
    setOpenDialog(true);
  };

  const editUser = (user) => {
    setInitialUser(user);
    setOperation("edit");
    setOpenDialog(true);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        API.delete(`/users/${id}`)
          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "Your record has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              "Not Deleted!",
              "Your record has been not deleted.",
              "error"
            );
          });
      }
    });
  };

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "mobile",
      label: "Mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "gender",
      label: "Gender",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const u = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(u)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(u.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <UserContext.Provider
        value={{ loadUsers, handleClose, operation, initialUser }}
      >
        <AddEditUser open={openDialog} handleClose={handleClose} />
      </UserContext.Provider>
      <Button onClick={addUser} variant="contained" color="primary">
        New +
      </Button>
      <MUIDatatable title="User List" data={users} columns={columns} />
    </>
  );
};

export default UserList;

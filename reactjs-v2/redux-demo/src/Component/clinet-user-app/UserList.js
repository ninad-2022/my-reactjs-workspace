import React, { useEffect, useState } from "react";
import axios from "axios";

import Muidatatable from "mui-datatables";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import UserContext from "./UserContext";
import AddEditUser from "./AddEditUser";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("add");
  const [initialUser, setInitialUser] = useState({});

  const handleClose = () => setOpen(false);

  const addUser = () => {
    setInitialUser({});
    setOperation("add");
    setOpen(true);
  };

  const editUser = (u) => {
    setInitialUser(u);
    setOperation("edit");
    setOpen(true);
  };

  const loadUsers = () => {
    axios
      .get("http://localhost:8888/users")
      .then((response) => {
        setUsers(response.data.data);
        // console.log(response);
      })
      .catch(console.log);
  };
  useEffect(() => {
    loadUsers();
  }, []);

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
        axios
          .delete(`http://localhost:8888/users/${id}`)
          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "Your record has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              "Not Deleted!",
              "Your reocrd has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "mobile",
      label: "Mobile",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "age",
      label: "Age",
    },
    {
      name: "gender",
      label: "Gender",
    },
    {
      name: "avatar",
      label: "Avatar",
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user?._id)}>
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
      <Button onClick={addUser} variant="contained" color="primary">
        New +
      </Button>

      <UserContext.Provider
        value={{
          open: open,
          operation: operation,
          handleClose: handleClose,
          initialUser,
          loadUsers,
        }}
      >
        <AddEditUser />
      </UserContext.Provider>

      <Muidatatable title="User List" data={users} columns={columns} />
    </>
  );
};

export default UserList;

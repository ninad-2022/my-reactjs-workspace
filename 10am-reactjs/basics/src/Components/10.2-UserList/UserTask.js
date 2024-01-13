import React, { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
const UserTask = () => {
  const [users, setUsers] = useState([]);

  const getUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <h2>User Task</h2>
      <AddUser getUser={getUser} />
      <hr />
      <UserList users={users} />
    </>
  );
};

export default UserTask;

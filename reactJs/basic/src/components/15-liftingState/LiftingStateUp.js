// this is a parent one, we need its state here
import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import UserList2 from "./UserList2";

const LiftingStateUp = () => {
  // 1.9- maintaining a state
  const [users, setUsers] = useState([]); //taking array for the list

  //2- we are creating a method to addUser into the state i.e. 1.9
  const addUser = (user) => {
    setUsers([...users, user]);
    // 3.1- for storing the list into JSON the local storage
    localStorage.setItem("users", JSON.stringify(users));
  };

  // 3.1- you have to reload into the mounting storage as it goes disappear after reload. So, we have to state the data into the mounting phase.
  useEffect(() => {
    //3.2- get list of the users and parse it.
    const users = JSON.parse(localStorage.getItem("users"));
    //3.3- set it if you have user's list
    if (users) setUsers(users);
  }, []);

  return (
    <>
      <h1>Lifting state up</h1>

      {/*1.8- we need state of this CreateUser */}
      {/* 2.1- passing that method as a props to the child. props can be any name you want */}
      <CreateUser getUser={addUser} />
      <hr />
      <UserList users={users} />
      <hr />
      <UserList2 users={users} />
    </>
  );
};
export default LiftingStateUp;

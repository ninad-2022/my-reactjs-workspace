import React, { useState } from "react";
import axios from "axios";
const GetUser = () => {
  const [users, GetUsers] = useState([]);

  const getUserData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        GetUsers(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Get Users</h2>
      <button onClick={getUserData}>Get request</button>
      {Array.isArray(users) &&
        users.map(({ id, name, username, email, address }) => {
          return (
            <div
              key={id}
              style={{ border: "2px solid black", margin: 5, padding: 5 }}
            >
              <h2>{id}</h2>
              <h4>{name}</h4>
              <h2>{username}</h2>
              <h2>{email}</h2>
              <h2>{address.city}</h2>
            </div>
          );
        })}
    </>
  );
};

export default GetUser;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Profile = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <div
      style={{
        width: 250,
        padding: 10,

        margin: 10,
        boxShadow: "2px 2px 3px #888",
      }}
    >
      <img src={avatar} style={{ width: "100%" }} />
      <h2>
        <Link to={`/${id}`}>
          {id}
          {first_name}
          {last_name}
        </Link>
      </h2>
      <h3 style={{ wordBreak: "break-word" }}>Email-{email}</h3>
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = (page = 1) => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((response) => {
      setUsers(response.data.data);
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <h2>User List</h2>
      <button onClick={() => loadUsers(1)}>1</button>
      <button onClick={() => loadUsers(2)}>2</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Profile key={user.id} {...user} />
        ))}
      </div>
    </>
  );
};
export default UserList;

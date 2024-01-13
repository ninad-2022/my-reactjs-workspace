import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const GetUsers = () => {
  // maintaining a data in the state
  const [users, setUsers] = useState([]);

  //   default parameter for dynamic change nd function for getting data from the server
  const loadUsers = (page = 1) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data?.data); //safe navigation
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <h2>List all users</h2>
      <button onClick={() => loadUsers(1)}>1</button>
      <button onClick={() => loadUsers(2)}>2</button>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map(({ id, email, first_name, last_name, avatar }, i) => (
            <div
              key={id}
              style={{
                width: "20vw",
                border: "1px solid black",
                padding: 10,
                margin: 10,
              }}
            >
              <img src={avatar} style={{ width: "100%" }} />
              <h3 style={{}}>
                <Link to={`/${id}`}>
                  {first_name} {last_name}
                </Link>
              </h3>
              <p>{email}</p>
            </div>
          ))}
      </section>
    </>
  );
};

export default GetUsers;

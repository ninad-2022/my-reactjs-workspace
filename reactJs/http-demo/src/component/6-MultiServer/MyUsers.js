import React, { useEffect, useState } from "react";
import { myServerInstance } from "../../api/API";
const MyUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    myServerInstance.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <h2>Users from my server</h2>
      <section style={{ backgroundColor: "yellowgreen" }}>
        {users &&
          users.map(({ id, firstName, lastName }) => (
            <div key={id}>
              <h3>{id}</h3>
              <h3>
                {firstName}
                {lastName}
              </h3>
            </div>
          ))}
      </section>
    </>
  );
};

export default MyUsers;

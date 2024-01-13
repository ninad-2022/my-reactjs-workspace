import React, { useEffect, useState } from "react";
import { jsonInstance } from "../../api/API";

const TypicodeUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    jsonInstance.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <>
      <h2>Users from Typicode server</h2>
      <section style={{ backgroundColor: "turquoise" }}>
        {users &&
          users.map(({ id, name, email }) => (
            <div key={id}>
              <h3>
                {id}-{name}
              </h3>
              <h3>{email}</h3>
            </div>
          ))}
      </section>
    </>
  );
};
export default TypicodeUsers;

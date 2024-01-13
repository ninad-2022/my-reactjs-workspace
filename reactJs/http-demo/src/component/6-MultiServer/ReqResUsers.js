import React, { useEffect, useState } from "react";
import { reqResInstance } from "../../api/API";

const ReqResUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    reqResInstance.get("/users").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <>
      <h2>Users reqResInstance</h2>
      <section style={{ backgroundColor: "palegoldenrod" }}>
        {users &&
          users.map(({ id, first_name, last_name }) => (
            <div key={id}>
              <h3>{id}</h3>
              <h3>
                {first_name}
                {last_name}
              </h3>
            </div>
          ))}
      </section>
    </>
  );
};

export default ReqResUsers;

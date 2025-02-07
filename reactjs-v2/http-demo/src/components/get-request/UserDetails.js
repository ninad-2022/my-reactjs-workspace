import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch(console.log);
  }, [id]);

  return (
    <>
      <Link to="/">All users</Link>
      <h2>User Details</h2>
      <img src={user.avatar} />
      <h3>
        Name:{user.first_name}
        {user.last_name}
      </h3>
      <h4>Email:- {user.email}</h4>
    </>
  );
};

export default UserDetails;

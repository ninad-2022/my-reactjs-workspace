import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UserProfile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { avatar, first_name, last_name, email } = user;
  return (
    <>
      <img src={avatar} />
      <h1>
        {first_name}
        {last_name}
      </h1>
      <p>Email:-{email}</p>
    </>
  );
};

export default UserProfile;

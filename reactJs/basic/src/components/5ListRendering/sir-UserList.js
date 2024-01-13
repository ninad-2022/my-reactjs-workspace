import React from "react";
import UserProfile from "./sir-UserProfile";
const UserListSir = () => {
  const users = [
    {
      id: 1,
      name: "aaa",
      mobile: "11111",
      age: 10,
      avatar: "images/on.jpg",
    },
    {
      id: 2,
      name: "bbb",
      mobile: "11111",
      age: 10,
      avatar: "images/on.jpg",
    },
    {
      id: 3,
      name: "cccc",
      mobile: "11111",
      age: 10,
      avatar: "images/off.jpg",
    },
    {
      id: 4,
      name: "dddd",
      mobile: "11111",
      age: 10,
      avatar: "images/on.jpg",
    },
    {
      id: 5,
      name: "eee",
      mobile: "11111",
      age: 10,
      avatar: "images/on.jpg",
    },
  ];
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {Array.isArray(users) &&
        users.map((user, i) => <UserProfile key={user.id} {...user} />)}
    </section>
  );
};

export default UserListSir;

import React from "react";
const UserProfile = ({ id, name, mobile, age, avatar }) => {
  return (
    <div
      style={{ border: "1px solid #999", width: 150, margin: 10, padding: 10 }}
    >
      <img src={avatar} style={{ width: "100%" }} />
      <h2>ID: {id}</h2>
      <h3>Name: {name}</h3>
      <h3>Mobile: {mobile}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
};

export default UserProfile;

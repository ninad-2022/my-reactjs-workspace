import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/slices/UserSlicePractice";
const UserProfile = ({ name, email, mobile }) => {
  return (
    <div style={{ width: 200, border: "1px sloid #444", margin: 5 }}>
      <h2>Name:-{name}</h2>
      <h5>Email:-{email}</h5>
      <h5>Mobile:-{mobile}</h5>
    </div>
  );
};

const UserList = () => {
  const users = useSelector(selectUser);

  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(users) &&
        users.map((user, i) => <UserProfile {...user} key={i} />)}
    </section>
  );
};

export default UserList;

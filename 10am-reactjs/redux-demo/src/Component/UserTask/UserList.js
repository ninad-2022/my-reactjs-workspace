import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, removeUser } from "../../app/slices/UserSlice";

const UserProfile = ({ user, deleteUser, editUser }) => {
  const { id, name, mobile, email } = user;
  return (
    <div
      style={{ width: 200, border: "1px solid #444", padding: 5, margin: 5 }}
    >
      <h4>Name:- {name}</h4>
      <h4>Mobile:- {mobile}</h4>
      <h4>Email:- {email}</h4>
      <button onClick={() => editUser(user)}>Edit</button>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </div>
  );
};

const UserList = ({ editUser }) => {
  const user = useSelector(selectUsers);

  const dispatch = useDispatch();
  
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      <h2>User List</h2>
      {Array.isArray(user) &&
        user.map((user, i) => (
          <UserProfile
            key={i}
            user={user}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        ))}
    </section>
  );
};

export default UserList;

// let a = [1, 2, 3, 4, 5, 6];
// c = 1+2+3+4+5+6 = ans

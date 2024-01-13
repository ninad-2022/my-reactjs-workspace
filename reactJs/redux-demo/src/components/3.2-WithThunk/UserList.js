import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersThunk, selectUsers } from "../../app/slices/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  // in the end access the state

  const users = useSelector(selectUsers);
  // here we need to dispatch the thunk for getting updated data into the state, so we are dispatching loadUsersThunk now acces the state
  useEffect(() => {
    dispatch(loadUsersThunk(1));
  }, []);

  return (
    <>
      <h2>User List</h2>
      <section style={{ display: "flex" }}>
        {Array.isArray(users) &&
          users.map(({ id, first_name, last_name, avatar, email }) => (
            <div
              key={id}
              style={{
                border: "2px solid #333",
                padding: 10,
                margin: 5,
                maxWidth: 250,
              }}
            >
              <img src={avatar} style={{ width: "100%" }} />
              <h3>
                {id}-{first_name} {last_name}
              </h3>
              <p>{email}</p>
            </div>
          ))}
      </section>
    </>
  );
};
export default UserList;

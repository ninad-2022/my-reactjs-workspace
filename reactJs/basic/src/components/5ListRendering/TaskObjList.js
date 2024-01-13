import React from "react";
const UserList = () => {
  const user = [
    { id: 1, name: "a", mobile: "111", age: 10, avatar: "img-1" },
    { id: 2, name: "b", mobile: "222", age: 20, avatar: "img-2" },
    { id: 3, name: "c", mobile: "333", age: 30, avatar: "img-3" },
    { id: 4, name: "d", mobile: "444", age: 40, avatar: "img-4" },
    { id: 5, name: "e", mobile: "555", age: 50, avatar: "img-5" },
    { id: 6, name: "g", mobile: "666", age: 60, avatar: "img-6" },
    { id: 7, name: "h", mobile: "777", age: 70, avatar: "img-6" },
    { id: 8, name: "i", mobile: "888", age: 80, avatar: "img-6" },
    { id: 9, name: "j", mobile: "999", age: 90, avatar: "img-6" },
    { id: 10, name: "k", mobile: "000", age: 100, avatar: "img-6" },
    { id: 11, name: "l", mobile: "121", age: 110, avatar: "img-6" },
    { id: 12, name: "m", mobile: "131", age: 120, avatar: "img-6" },
    { id: 13, name: "n", mobile: "141", age: 130, avatar: "img-6" },
  ];

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {Array.isArray(user) &&
          user.map((user, i) => (
            <div
              key={user.id + user.name + user.mobile}
              style={{
                border: "1px solid #999",
                padding: 10,
                margin: 10,
                minWidth: 150,
              }}
            >
              <h2>{user.id}</h2>
              <h2>{user.name}</h2>
              <p>{user.mobile}</p>
              <p>{user.age}</p>
              <span>{user.avatar}</span>
            </div>
          ))}
      </section>
    </>
  );
};
export default UserList;

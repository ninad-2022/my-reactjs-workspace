import React from "react";
const members = [
  {
    name: "Aaaa",
    age: 12,
    mobile: 9879723,
    avatar:
      "https://bestprofilepictures.com/wp-content/uploads/2021/06/Anonymous-Profile-DP-1.jpg",
  },
  {
    name: "bbbb",
    age: 13,
    mobile: 21379723,
    avatar:
      "https://bestprofilepictures.com/wp-content/uploads/2021/06/Hacker-Profile-Photo.jpg",
  },
  {
    name: "CCC",
    age: 13,
    mobile: 98721231,
    avatar:
      "https://bestprofilepictures.com/wp-content/uploads/2021/06/Anonymous-Profile-DP-1.jpg",
  },
  {
    name: "dddd",
    age: 14,
    mobile: 792319723,
    avatar:
      "https://bestprofilepictures.com/wp-content/uploads/2021/06/Hacker-Profile-Photo.jpg",
  },
  {
    name: "eeee",
    age: 15,
    mobile: 987325498,
    avatar:
      "https://bestprofilepictures.com/wp-content/uploads/2021/06/Anonymous-Profile-DP-1.jpg",
  },
  {
    name: "dddd",
    age: 14,
    mobile: 792319723,
    avatar:
      "https://bestprofilepictures.com/wp-content/uploads/2021/06/Hacker-Profile-Photo.jpg",
  },
  {
    name: "eeee",
    age: 15,
    mobile: 987325498,
    avatar:
      "https://bestprofilepictures.com/wp-content/uploads/2021/06/Anonymous-Profile-DP-1.jpg",
  },
];
const Team = () => {
  return (
    <>
      <h2>Team Component</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {members.map((user, i) => (
          <div
            key={i}
            style={{
              width: 200,
              border: "1px solid black",
              margin: 1,
              padding: 10,
            }}
          >
            <h2>Name: {user.name}</h2>
            <h3>Age:{user.age}</h3>
            <h3>Mobile:{user.mobile}</h3>
            <img style={{ width: "100%" }} src={user.avatar} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Team;

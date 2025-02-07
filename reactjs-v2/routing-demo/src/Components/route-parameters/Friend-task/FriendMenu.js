import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
const FriendMenu = () => {
  return (
    <aside
      style={{
        backgroundColor: "teal",
        display: "flex",
        flexDirection: "column",
        padding: 10,
      }}
    >
      {data.map(({ id, name, gender }) => (
        <Link
          key={id}
          to={`/${id}`}
          style={{
            backgroundColor: "yellowgreen",
            padding: "2px 5px",
            marginTop: 5,
            textDecoration: "none",
            border: `2px solid ${
              gender.toLowerCase() == "female" ? "pink" : "blue"
            }`,
          }}
        >
          {name}
        </Link>
      ))}
    </aside>
  );
};

export default FriendMenu;

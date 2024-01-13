import React from "react";
import { Link } from "react-router-dom";
const FriendCategory = ({ items }) => {
  console.log("items: ", items);
  return (
    <ul>
      {Array.isArray(items) &&
        items.map((friend, i) => (
          <li key={i}>
            <Link to={`/${friend}`}>{friend}</Link>
          </li>
        ))}
    </ul>
  );
};

export default FriendCategory;

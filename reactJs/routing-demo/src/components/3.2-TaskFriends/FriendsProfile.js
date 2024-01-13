import React from "react";
import FriendList from "./FriendList";
import FriendCategory from "./FriendsCategory";
import friends from "./friends.json";
import { Route, Routes } from "react-router-dom";
const FirendsProfile = () => {
  return (
    <section style={{ display: "flex" }}>
      <div style={{ width: "25vw", backgroundColor: "red" }}>
        <FriendCategory items={Object.keys(friends)} />
      </div>
      <div style={{ width: "25vw", backgroundColor: "yellowgreen" }}>
        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/:category" element={<FriendList />} />
        </Routes>
      </div>
    </section>
  );
};

export default FirendsProfile;

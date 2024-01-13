import React from "react";
import { Route, Routes } from "react-router-dom";
import FriendMenu from "./FriendMenu";
import FriendProfile from "./FriendProfile";
const FriendTask = () => {
  return (
    <>
      <h2>Friend Task</h2>
      <section style={{ display: "flex" }}>
        <div style={{ minWidth: 250, flexFlow: 1, flexShrink: 0 }}>
          <FriendMenu />
        </div>
        <div
          style={{
            backgroundColor: "cyan",
            margin: 5,
            flexGrow: 1,
            padding: 10,
          }}
        >
          <Routes>
            {/* http://localost:3000/4  */}
            <Route path=":id" element={<FriendProfile />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default FriendTask;

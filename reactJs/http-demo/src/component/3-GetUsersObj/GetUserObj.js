import React from "react";
import GetUsers from "./GetUsers";
import UserProfile from "./UserProfile";
import { Route, Routes } from "react-router-dom";
const GetUsersObj = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetUsers />} />
        <Route path="/:id" element={<UserProfile />} />
      </Routes>
    </>
  );
};
export default GetUsersObj;

import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetails from "./PostDetails";
import PostList from "./PostList";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
const GetRequest = () => {
  return (
    <>
      <h2>Get Post</h2>
      {/*
      <Routes>
        <Route path="" element={<PostList />} />
        <Route path=":id" element={<PostDetails />} />
      </Routes> 
      */}
      <Routes>
        <Route path="" element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default GetRequest;

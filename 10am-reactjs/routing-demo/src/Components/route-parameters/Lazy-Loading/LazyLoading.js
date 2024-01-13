import React, { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
const Dashboard = lazy(() => import("./Dashboard"));
const Login = lazy(() => import("./Login"));
const Profile = lazy(() => import("./Profile"));
const Home = lazy(() => import("./Home"));

const LazyLoading = () => {
  return (
    <>
      <h2>LazyLoading Component</h2>
      <Link to="">Home</Link>
      <Link to="login">login</Link>
      <Link to="dashboard">dashboard</Link>
      <Link to="profile">Profile</Link>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default LazyLoading;

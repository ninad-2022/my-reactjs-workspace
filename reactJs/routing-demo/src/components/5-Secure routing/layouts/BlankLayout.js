import React from "react";
import Header from "../pages/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
// creating an layout for unsecured components
// we have to route BlankLayout and SecureLayout in the RouteSecurity
const BlankLayout = () => {
  return (
    <>
      {/* 2.2- taking header, now we have to route home login -- link it into header  */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default BlankLayout;

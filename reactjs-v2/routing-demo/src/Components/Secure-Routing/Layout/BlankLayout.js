import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../Features/frontend/contact/Contact";
import Home from "../Features/frontend/home/Home";
import Login from "../Features/frontend/login/Login";
import Register from "../Features/frontend/register/Register";
import Header from "../UI/header/Header";
import PageNotFound from "../UI/page-not-found/PageNotFound";
const BlankLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default BlankLayout;

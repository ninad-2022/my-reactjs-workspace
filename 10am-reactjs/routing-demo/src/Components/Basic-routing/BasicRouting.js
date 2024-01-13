import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact";
import Home from "./Home";
import Designing from "./Services/Designing";
import Development from "./Services/Development";
import Marketing from "./Services/Marketing";
import Services from "./Services/Services";
const BasicRouting = () => {
  return (
    <>
      <h2>BasicRouting</h2>
      <Link to="">Home</Link>
      <Link to="about">About</Link>
      <Link to="services">Services</Link>
      <Link to="contact">Contact</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path="" element={<Marketing />} />
          <Route path="development" element={<Development />} />
          <Route path="designing" element={<Designing />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default BasicRouting;

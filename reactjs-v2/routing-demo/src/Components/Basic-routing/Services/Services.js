import React from "react";
import { Link, Outlet } from "react-router-dom";
const Services = () => {
  return (
    <>
      <h2>Services Component</h2>
      <Link to="">Marketing</Link>
      <Link to="development">Development</Link>
      <Link to="designing">Designing</Link>
      <hr />
      <Outlet />
    </>
  );
};

export default Services;

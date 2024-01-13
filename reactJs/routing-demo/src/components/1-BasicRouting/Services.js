import React from "react";
import { Link, Outlet } from "react-router-dom";
const Services = () => {
  return (
    <>
      <h2>Services Component</h2>
      {/* nested route  */}
      <Link to="">Development Server</Link>
      <Link to="marketing">marketing Server</Link>
      <Link to="designing">Designing Server</Link>
      {/* outlet is essential for displaying the UI, it exactly shows the component on the UI. where you put this, there it shows the  component */}
      <Outlet />
    </>
  );
};

export default Services;

import React from "react";
import Overview from "./OvervView";
import Team from "./Team";
import { Route, Routes, Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <h2>About Component</h2>

      {/* doing nesting of <Overview/> and <Team/> here  */}
      <Link to="">Overview</Link>
      <Link to="team">Team</Link>
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </>
  );
};

export default About;

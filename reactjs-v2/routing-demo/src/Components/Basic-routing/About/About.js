import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import Team from "./Team";
const About = () => {
  return (
    <>
      <h2>About Component</h2>
      {/* <Link to="">Overview</Link>
      <Link to="team">team</Link> */}

      {/* <Routes>
        <Route path="" element={<Overview />} />
        <Route path="team" element={<Team />} />
      </Routes> */}
      {/* npm i react-router-dom  */}

      <Link to="team">Team </Link>
      <Link to="">overview</Link>
      <Routes>
        {/* localhost:3000 */}
        <Route path="" element={<Overview />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </>
  );
};

export default About;

import React from "react";
import CarrerSummery from "./CarrerSummery";
import Academics from "./Academics";
import PersonalDetails from "./Personal";
import Professional from "./Professional";
import Projects from "./Projects";
import { Routes, Route, Link } from "react-router-dom";
const Resume = () => {
  return (
    <>
      <div
        style={{
          width: "50vw",
          backgroundColor: "grey",
          color: "white",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button>
            <Link style={{ textDecoration: "none" }} to="/academics">
              Academics
            </Link>
          </button>
          <button>
            <Link style={{ textDecoration: "none" }} to="/personal">
              personal
            </Link>
          </button>
          <button>
            <Link style={{ textDecoration: "none" }} to="/professional">
              professional
            </Link>
          </button>
          <button>
            <Link style={{ textDecoration: "none" }} to="/project">
              project
            </Link>
          </button>
        </div>

        <Routes>
          <Route index element={<CarrerSummery />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/personal" element={<PersonalDetails />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};

export default Resume;

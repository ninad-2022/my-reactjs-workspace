import Button from "@mui/material/Button";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Airlines from "./Airlines";
import Passangers from "./Passangers";
const TaskAirline = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "yellowGreen",
          padding: 10,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="contained">
          <Link className="linkBtn" to="/airlines">
            Airlines
          </Link>
        </Button>
        <Button variant="contained">
          <Link className="linkBtn" to="/passanger">
            Passangers
          </Link>
        </Button>
      </div>
      <Routes>
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/passanger" element={<Passangers />} />
      </Routes>
    </>
  );
};

export default TaskAirline;

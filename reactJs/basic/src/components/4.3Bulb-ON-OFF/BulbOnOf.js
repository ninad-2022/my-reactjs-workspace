import React, { Component, useState } from "react";
const ConditionalRendering = () => {
  const [isOn, setLoggedIn] = useState(false);

  return (
    <>
      <button onClick={() => setLoggedIn(!isOn)}>{isOn ? "OFF" : "ON"}</button>
      {isOn ? (
        <img
          src="images/1420410410.svg"
          style={{ width: "50vw", height: "50vh", backgroundColor: "yellow" }}
        />
      ) : (
        <img
          src="images/1420410410.svg"
          style={{ width: "50vw", height: "50vh", backgroundColor: "white" }}
        />
      )}
    </>
  );
};
export default ConditionalRendering;

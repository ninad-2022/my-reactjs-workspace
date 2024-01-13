import React, { Component, useState } from "react";
const ConditionalRendering = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  //conditionalRendering by using if else (not recommended)
  let message = "";
  if (isLoggedIn) {
    message = <p>You have successfully logged in</p>;
  } else {
    message = <p>You have no logged in</p>;
  }
  return (
    <>
      <button onClick={() => setLoggedIn(!isLoggedIn)}>login</button>
      {/* ConditionalRendering by using ternary operator (recommended) */}
      <h1>{isLoggedIn ? "topper skills" : "you are out - false"}</h1>
      <h1>
        {isLoggedIn ? (
          <>
            <h2>Ninad</h2>
            <p>lorem-1-2-3-4-5-6-7-8-9</p>
          </>
        ) : (
          "bahar ho app"
        )}
      </h1>
      <hr />
      {message}
      {/* ConditionalRendering by using && operator */}
      {isLoggedIn && (
        <div>
          <h3
            style={{
              backgroundColor: "red",
              display: "inline",
            }}
          >
            Your profile
          </h3>
          <h4>Narhe</h4>
          <h4>Narhe</h4>
          <h4>Narhe</h4>
          <h4>Narhe</h4>
          <h4>Narhe</h4>
        </div>
      )}
    </>
  );
};
export default ConditionalRendering;

import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const PracticeGethttp = () => {
  const [data, showData] = useState([]);
  const showingData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        showData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Button variant="outlined" onClick={showingData}>
        Get Data
      </Button>
      {Array.isArray(data) &&
        data.map(({ postId, id, name, email, body }) => {
          return (
            <div
              key={id}
              style={{
                width: "30vw",
                backgroundColor: "GrayText",
                border: "2px solid black",
                padding: "10px",
                color: "white",
                margin: "10px",
              }}
            >
              <h1>postId {postId}</h1>
              <h2>id{id}</h2>
              <h3>Product name is :-{name}</h3>
              <p>Email-{email}</p>
              <p>{body}</p>
            </div>
          );
        })}
    </>
  );
};

export default PracticeGethttp;

// fetch a server data on the click of the button
import React, { useState } from "react";
import axios from "axios";
const GetRequest = () => {
  const [posts, setPosts] = useState([]);

  //   1.1- for getting the server data
  const getServerData = () => {
    //fetch server data
    //get Request
    //by  default method is GET
    // fetch is not JS method, its a working window method
    // fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    //   .then(async (response) => {
    //     const data = await response.json();
    //     setPosts(data);
    //     console.log("server Data:-", data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //the above is hard, use axios library
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //1.2-getting data
      .then((response) => {
        setPosts(response.data); //1.3- adding it into the state
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2>Get Request</h2>
      <button onClick={getServerData}>Get request</button>

      {/* 1.4- extracting data from the state */}
      {Array.isArray(posts) &&
        posts.map(({ id, title, body }) => {
          //destructuring prpos so that we can access them directly by name
          return (
            <div
              key={id}
              style={{ border: "2px solid black", margi6n: 5, padding: 5 }}
            >
              <h3>
                {id}-{title}
              </h3>
              <h2>{title}</h2>
              <h2>{body}</h2>
            </div>
          );
        })}
    </>
  );
};

export default GetRequest;

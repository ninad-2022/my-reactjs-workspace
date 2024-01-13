import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostItem = ({ title, id, body }) => (
  <div style={{ padding: 10, margin: 10, border: "2px solid black" }}>
    <h3>
      <Link to={`/${id}`}>
        {id}-{title}
      </Link>
    </h3>
    <p>{body}</p>
  </div>
);

const PostList = () => {
  const [posts, setPost] = useState([]);

  //   fetch API
  useEffect(() => {
    // make the get request to fetch the post
    // XMLHttpRequest //build in object for it but recently we are using fetch api. it provides function.

    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" });
    // .then(async (response) => {
    //   // console.log("response", response);
    //   // console.log("response", response.json());
    //   const data = await response.json();
    //   console.log("data", data);
    //   setPost(data);
    // })
    // .catch((err) => {
    //   console.log("Error: ", err);
    // });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
        // response = {
        //   headers,
        //   data,
        //   status,
        //   statusText,
        //   config,
        //   request,
        // };
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Post List</h2>
      {Array.isArray(posts) && posts.map((post, i) => <PostItem {...post} />)}
    </>
  );
};

export default PostList;

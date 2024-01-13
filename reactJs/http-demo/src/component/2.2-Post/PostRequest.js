import React, { useState } from "react";
import axios from "axios";
const PostRequest = () => {
  // 1.1- state to set our data in it
  const [post, setPost] = useState({});

  // accesing the value and name nd putting it into the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post) //setting data into the post
      .then((response) => {
        alert("Post created...");
      })
      .catch((err) => {
        alert("could not created the post");
        console.log(err);
      });
  };

  return (
    <>
      {/* 1.3 making a html  */}
      <h2>Post Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={handleChange} name="title" />
        <br />
        <label>body</label>
        <textarea name="body" onChange={handleChange}></textarea>
        <br />
        <input type="submit" value="Create Post" />
      </form>
    </>
  );
};

export default PostRequest;

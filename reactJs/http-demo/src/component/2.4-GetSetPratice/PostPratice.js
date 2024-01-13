import axios from "axios";
import React, { useState } from "react";
const PraticePost = () => {
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then(alert("data is posted"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Post request</h2>
        <label>Name</label>
        <input type="text" onChange={handleChange} />
        <label>place</label>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="praticeSub" />
      </form>
    </>
  );
};

export default PraticePost;

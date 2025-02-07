import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    //   async (response) => {
    //     const data = await response.json();
    //     setPost(data);
    //   }
    // );

    // use axios library for fetching the api
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { id: postId, title, body } = post;
  return (
    <>
      <Link to="/">show all</Link>
      <div
        style={{
          width: "50%",
          margin: "auto",
          padding: 20,
          border: "1px solid #999",
          boxShadow: "0 0 4px 2px #666",
        }}
      >
        <h2>{postId}</h2>
        <h2>{title}</h2>
        <h2>{body}</h2>
      </div>
    </>
  );
};

export default PostDetails;

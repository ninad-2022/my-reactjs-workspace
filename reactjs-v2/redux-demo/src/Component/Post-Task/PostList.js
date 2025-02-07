import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../../app/slices/PostSlice";

const PostList = () => {
  const posts = useSelector(selectPosts);
  return (
    <>
      <h2>Post List</h2>
      {Array.isArray(posts) &&
        posts.map(({ id, title, body }) => {
          return (
            <div style={{ border: "1px solid", padding: 5, margin: 5 }}>
              <h3>
                {id}-{title}
              </h3>
              <p>{body}</p>
            </div>
          );
        })}
    </>
  );
};

export default PostList;

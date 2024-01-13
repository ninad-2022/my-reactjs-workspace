import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, selectPosts } from "../../app/slices/PostSlices";
// import {} from "react-redux";
import axios from "axios";
const PostList = () => {
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      // dispatch(action creater (payload)) //dispatch will take action and send it to the store. we have to pass value into it
      dispatch(addPosts(response.data));
    });
  }, []);

  return (
    <>
      <h2>Post List</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(posts) &&
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #333",
                padding: 10,
                margin: 5,
                maxWidth: 250,
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </section>
    </>
  );
};

export default PostList;

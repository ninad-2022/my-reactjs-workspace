import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPosts } from "./thunk-action";
import PostList from "./PostList";

const PostTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <>
      <h3>Post Task</h3>
      <PostList />
    </>
  );
};

export default PostTask;

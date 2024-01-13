import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodo } from "./thunk-action";

import TodoList from "./TodoList";
const PostTodo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodo());
  }, []);
  return (
    <>
      <h2>PostTask</h2>
      <TodoList />
    </>
  );
};

export default PostTodo;

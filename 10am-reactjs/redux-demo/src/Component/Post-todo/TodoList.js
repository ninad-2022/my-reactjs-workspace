import React from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "../../app/slices/todoSlice";

const TodoList = () => {
  const todos = useSelector(selectTodo);
  return (
    <>
      <h2>todo List</h2>
      {Array.isArray(todos) &&
        todos.map(({ id, title }) => {
          return (
            <div style={{ border: "1px solid", padding: 5, margin: 5 }}>
              <h3>
                {id}-{title}
              </h3>
            </div>
          );
        })}
    </>
  );
};

export default TodoList;

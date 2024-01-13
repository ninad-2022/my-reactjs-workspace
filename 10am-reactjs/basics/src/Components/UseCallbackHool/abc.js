import { useCallback, useState } from "react";
import Todos from "./Todos";

const TodoApp = () => {
  console.log("parent render");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default TodoApp;

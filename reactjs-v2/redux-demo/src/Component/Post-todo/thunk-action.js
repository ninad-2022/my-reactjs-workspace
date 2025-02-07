import axios from "axios";
import { addToDo } from "../../app/slices/todoSlice";

export const loadTodo = (id) => async (dispatch, getState) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  dispatch(addToDo(response.data));
};

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      if (Array.isArray(action.payload)) return [...action.payload];
      else return [...state, state.payload];
    },
  },
});

export default todoSlice.reducer;
export const { addToDo } = todoSlice.actions;
export const selectTodo = (state) => state.todo;

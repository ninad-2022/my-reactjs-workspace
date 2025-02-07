import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      if (Array.isArray(action.payload)) return [...action.payload];
      else return [...state, state.payload];
    },
  },
});

export default postSlice.reducer;
export const { addPost } = postSlice.actions;
export const selectPosts = (state) => state.posts;

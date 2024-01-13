import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPosts: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

export const { addPosts } = PostSlice.actions;
export const selectPosts = (state) => state.posts;
export default PostSlice.reducer;

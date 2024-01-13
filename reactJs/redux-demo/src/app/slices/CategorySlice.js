import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    showCateogry: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

export const { showCateogry } = CategorySlice.actions;
export const selectCategory = (state) => state.category;
export default CategorySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const CategoryListSlice = createSlice({
  name: "categoryList",
  initialState: [],
  reducers: {
    showCategoryList: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

// action creater
export const { showCategoryList } = CategoryListSlice.actions;
// state selector
export const selectCategoryList = (state) => state.categoryList;
export default CategoryListSlice.reducer;

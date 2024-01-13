import { createSlice } from "@reduxjs/toolkit";

const JsonUserSlice = createSlice({
  name: "jsonUser",
  initialState: [],
  reducers: {
    loadUser: (state, action) => {
      if (Array.isArray(action.payload)) return [...action.payload];
      else return [...state, state.payload];
    },
  },
});
export default JsonUserSlice.reducer;
export const { loadUser } = JsonUserSlice.actions;
export const selectJsonUser = (state) => state.jsonUser;

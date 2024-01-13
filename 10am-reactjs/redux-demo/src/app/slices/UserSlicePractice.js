import { createSlice } from "@reduxjs/toolkit";
const UserSlicePratice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

export const { addUser } = UserSlicePratice.actions;
export const selectUser = (state) => state.user;
export default UserSlicePratice.reducer;

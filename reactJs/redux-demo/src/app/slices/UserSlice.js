import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const UserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUsers: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

export const { addUsers } = UserSlice.actions;
export const selectUsers = (state) => state.users;
export default UserSlice.reducer;

//creating a thunk function which returns throw arguments i.e. dispatch and getState()
export const loadUsersThunk = (page = 1) => {
  return (dispatch, getState) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        // taking action and dispatching the data into the store. now use it in UI (our business logic is here)
        dispatch(addUsers(response.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

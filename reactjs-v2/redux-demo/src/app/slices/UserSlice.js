import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    //action creator): reducer
    // reducer has tow parameters that is state and action
    addUser: (state, { payload }) => {
      // return [...state, payload];

      if (state.length === 0) {
        payload.id = 1;
      } else {
        const maxId = state.reduce((pId, user) => {
          return pId < user.id ? user.id : pId;
        }, 0);
        payload.id = maxId + 1;
      }
      return [...state, payload];
    },

    removeUser: (state, action) => {
      const id = action.payload;
      return state.filter((u) => u.id !== id);
    },

    udpateUser: (state, action) => {
      const index = state.findIndex((user, i) => user.id === action.payload.id);

      const user = { ...state[index], ...action.payload };
      const arr = [...state];
      arr.splice(index, 1, user);
      return arr;
    },
  },
});

// action creater
export const { addUser, removeUser, udpateUser } = UserSlice.actions;

// selector. here we get state as a parameter
export const selectUsers = (state) => state.users;

// reducer
export default UserSlice.reducer;
// give above reducer to the store

// npm i @redux/toolkit
import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    // action : reducer
    increment: (state, { payload }) => {
      // mutable change
      state.count = state.count + (payload ? parseFloat(payload) : 1);
    },
    // immutable change
    decrement: (state, { payload }) => {
      return {
        count: state.count - (payload ? parseFloat(payload) : 1),
      };
    },
    reset: () => ({ count: 0 }),
  },
});

export const { decrement, increment, reset } = CounterSlice.actions;
export const selectCount = (state) => state.counter.count;
export default CounterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const CounterSlice = createSlice({
  // name
  // initialState
  // reducers
  name: "counter",
  initialState: { value: 0 },
  // reducer for updating perticular action
  reducers: {
    // taking action: reducer for updating state on that action
    increment: (state, action) => {
      //mutable
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      // immutable update
      // creating a new state value: returning value into it
      return { value: state.value - 1 };
    },
    reset: (state) => ({ value: 0 }),
  },
  // extraReducers is use to access the property of the other slices
  /*
  extraReducers:{}
  */
});

// CounterSlice will create a action creater on the basis of the action that we have given to iteratorSymbol, we have to call them by using CounterSlice.actions. it gives the function that we need to call in the other file i.e. {increment}
// object destrucutring in action creater which is a function
//action creater
export const { decrement, increment, reset } = CounterSlice.actions;

// selector for selecting the state. it will select the state of the whole state in the redux store (state), so use below sequence
// syntax: state.sliceName.valueOfTheState
export const selectCounter = (state) => state.counter.value;

//exporting reducer form slice, pass this reducer to the store
export default CounterSlice.reducer;

// increment()
// {type:slicName/actionName}

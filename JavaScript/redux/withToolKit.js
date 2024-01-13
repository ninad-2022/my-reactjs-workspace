// npm i @reduxjs/toolkit
const { createSlice, configureStore } = require("@reduxjs/toolkit");

// creating a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    // action : reducer
    increment: (state, action) => {
      // mutable change
      // no return statement
      // state.count+=1

      // immutable update
      // return statement is required
      return { count: state.count + (action.payload ? action.payload : 1) };
    },
    decrement: (state, action) => {
      return { count: state.count - action.payload ? action.payload : 1 };
    },
    reset: (state) => ({ count: 0 }),
  },
});

// reducer
const CounterReducer = counterSlice.reducer;

// action creator
const { increment, decrement, reset } = counterSlice.actions;

// selector for getting state
const selectCount = (state) => state?.counter?.count;

// store
const store = configureStore({
  reducer: {
    // sliceName:reducer
    counter: CounterReducer,
  },
});

// subscribe store for notification
store.subscribe(() => {
  console.log(selectCount(store.getState()));
});

// dispatching action from store
store.dispatch(increment());
store.dispatch(increment(5));
store.dispatch(decrement(2));
store.dispatch(reset());
store.dispatch(increment(10));
store.dispatch(decrement(1));

// npm i @redux/toolkit react-redux

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/CounterSlice";
import PostReducer from "./slices/PostSlices";
// import UserReducer fom "./slices/UserReducer"
import UserReducer from "./slices/UserSlice";
import CategoryReducer from "./slices/CategorySlice";
import CategoryListReducer from "./slices/CategoryListSlice";

// configure all the reducer of the slices in the store.put all the reducer here
const store = configureStore({
  reducer: {
    // sliceName:reducerName
    counter: CounterReducer,
    posts: PostReducer,
    users: UserReducer,
    category: CategoryReducer,
    showCategoryList: CategoryListReducer,
  },
});
export default store;

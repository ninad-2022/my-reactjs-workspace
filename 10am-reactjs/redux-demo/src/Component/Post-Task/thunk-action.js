import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../app/slices/PostSlice";

// thunk function
// export const loadPosts = () => async (dispatch, getState) => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   dispatch(addPost(response.data));
// };

// thunk action creator. we need it when we have to fetch specific by using id, etc. whereas for single one go for thunk function

//thunk action creator
export const loadPosts = (id) => async (dispatch, getState) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch(addPost(response.data));
};

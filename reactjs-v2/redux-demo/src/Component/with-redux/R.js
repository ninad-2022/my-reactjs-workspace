import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  reset,
} from "../../app/slices/CounterSlice";
const R = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h2>R Component - {count}</h2>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
};

export default R;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, selectCount } from "../../app/CounterSlice";
// const Q = () => {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <h2>Q Component - {count}</h2>
//       <button onClick={() => dispatch(increment())}>++</button>
//       <button onClick={() => dispatch(decrement())}>--</button>
//     </>
//   );
// };

// export default Q;

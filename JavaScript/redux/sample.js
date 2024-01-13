// npm init -y
// npm i redux
// old way to use redux
// importing module before ES6.
const redux = require("redux");

// makign reducer
function reducer(state = 0, action) {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }
    case "reset": {
      return 0;
    }
  }
}
// making store by using function i.e. redux.createStore(reducer)
const store = redux.createStore(reducer);

// use below for multiple reducer and above for thee single reducer
// const store = redux.createStore({
//   reducer: {
//     counter: reducer,
//   },
// });

// dispatch()
// getState()

// creating action creater
const inc = () => ({ type: "increment" });
const dec = () => ({ type: "decrement" });

// subscribe will show the Notification i.e code
store.subscribe(() => {
  console.log("Counter: ", store.getState());
});

// calling action by dispatch
store.dispatch(inc());
store.dispatch(inc());
store.dispatch(inc());
store.dispatch(inc());
store.dispatch(dec());
store.dispatch(reset());

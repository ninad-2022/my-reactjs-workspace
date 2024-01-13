// npm init -y
// npm i redux
// without toolkit
const redux = require("redux");
const initialState = { count: 0 };

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { count: state.count + (action.payload ? action.payload : 1) };
    }
    case "counter/decrement": {
      return { count: state.count - (action.payload ? action.payload : 1) };
    }
    case "reset": {
      return initialState;
    }
  }
};

// creating a store and passing reducer to it
const store = redux.createStore(counterReducer);

// action creator
const inc = (amount) => {
  return {
    type: "counter/increment",
    payload: amount,
  };
};

const dec = (amount) => {
  return {
    type: "counter/decrement",
    payload: amount,
  };
};

const reset = () => {
  return {
    type: "reset",
  };
};

//.subscribe() will subscribe the store everytime
store.subscribe(() => {
  console.log(store.getState().count);
});

store.dispatch(inc(18));
store.dispatch(dec(1));
store.dispatch(reset());
store.dispatch(inc(3));

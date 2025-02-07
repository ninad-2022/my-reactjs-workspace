import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import userReducer from "./slices/UserSlicePractice";
import postReducer from "./slices/PostSlice";
import todoReducer from "./slices/todoSlice";
import JsonUserReducer from "./slices/JsonUserSlice";
import ShoppingReducer from "../Component/shopping-cart/ShoppingSlice";
import pokemonReducer from "../Component/Pokemon-task/PokemonSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    posts: postReducer,
    todo: todoReducer,
    jsonUser: JsonUserReducer,
    shopping: ShoppingReducer,
    pokemons: pokemonReducer,
  },
});

export default store;

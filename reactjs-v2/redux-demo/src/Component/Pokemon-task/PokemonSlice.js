import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {},
  // initialState: [],
  reducers: {
    addPokemon: (state, action) => {
      // return [...state, ...action.payload];
      return { ...action.payload };
    },
  },
});

export const { addPokemon } = pokemonSlice.actions;
export const selectPokemon = (state) => state.pokemons;
export default pokemonSlice.reducer;

import axios from "axios";
import { addPokemon } from "./PokemonSlice";

export const loadPokemons = () => (dispatch, getState) => {
  axios
    .get("https://api.pokemontcg.io/v2/cards?page=1&pageSize=10")
    .then((response) => {
      dispatch(addPokemon(response.data));
    });
};

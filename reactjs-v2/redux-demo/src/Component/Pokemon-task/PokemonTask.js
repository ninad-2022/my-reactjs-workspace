import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokemonList from "./PokemonList";
import { loadPokemons } from "./PokemonThunk";

const PokemonTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemons());
  }, []);

  return (
    <>
      <PokemonList />
    </>
  );
};

export default PokemonTask;

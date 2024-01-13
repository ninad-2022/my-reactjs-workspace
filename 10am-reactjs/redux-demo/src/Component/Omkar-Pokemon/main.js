import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePokemonCard from "./SinglePokemonCard";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonCardListingTask = () => {
  const [pokemonCards, setPokemonCards] = useState([]);

  const getCards = () => {
    const pageSize = 10;

    let pageNo = pokemonCards.length / pageSize + 1;
    // console.log(pageNo);

    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?page=${pageNo}&pageSize=${pageSize}`
      )
      .then((res) => {
        const cards = res.data.data;

        setPokemonCards([...pokemonCards, ...cards]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Pokemon - card listing</h3>
      <div>
        <InfiniteScroll
          dataLength={pokemonCards.length}
          next={getCards}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "cyan",
            justifyContent: "center",
          }}
        >
          {Array.isArray(pokemonCards) &&
            pokemonCards.map((card, i) => {
              return <SinglePokemonCard key={i} {...card} />;
            })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default PokemonCardListingTask;

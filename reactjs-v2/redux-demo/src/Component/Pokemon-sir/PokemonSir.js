import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// this programme only prints numbers
const PokemonSir = () => {
  const [cards, setCards] = useState([]);
  const [paginate, setPaginate] = useState({
    page: 1,
    pageSize: 10,
  });
  console.log("pokemomsir-1");
  const loadCards = () => {
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?page=${paginate.page}&pageSize=${paginate.pageSize}`
      )
      .then((response) => {
        console.log("data", response.data.data);
        setCards((cards) => [...cards, ...response.data.data]);
        setPaginate((state) => ({ ...state, page: state.page + 1 }));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <>
      <button onClick={loadCards}>load</button>
      <InfiniteScroll
        dataLength={cards.length}
        next={loadCards}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollThreshold={cards.length > 25 ? 0.9 : 0.8}
      >
        {cards.map((i, index) => (
          <div key={index}>div - #{index}</div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default PokemonSir;

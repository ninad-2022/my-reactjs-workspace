import axios from "axios";
import React, { useEffect, useState } from "react";
const PokemonSir2 = () => {
  const [cards, setCards] = useState([]);
  const [paginate, setPaginate] = useState({
    page: 1,
    pageSize: 10,
  });

  console.log("Pokemon2...");
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
    console.log("effect Pokemon2...");
    loadCards();
  }, []);

  return (
    <>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((c, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid #000",
                width: 200,
                padding: 5,
                margin: 5,
              }}
            >
              <img src={c.images.small} style={{ width: "100%" }} />
              <h4>{c.name}</h4>
            </div>
          );
        })}
      </section>
      <button
        style={{ backgroundColor: "skyblue", padding: 5 }}
        onClick={loadCards}
      >
        load more...
      </button>
    </>
  );
};

export default PokemonSir2;

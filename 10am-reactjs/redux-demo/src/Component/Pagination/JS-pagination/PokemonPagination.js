import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
const PokemonPagination = () => {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPageNo] = useState({
    pageNo: 1,
  });

  const loadUsers = () => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards?page=${page.pageNo}&pageSize=10`)
      .then((response) => {
        setPokemon(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, [page]);

  const nextPage = () => {
    setPageNo((page) => ({ ...page, pageNo: page.pageNo + 1 }));
    console.log("next page-", page.pageNo);
  };
  const previousPage = () => {
    setPageNo((page) => ({ ...page, pageNo: page.pageNo - 1 }));
    console.log("previous page-", page.pageNo);
  };
  return (
    <>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemon.map((c, i) => {
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
      <Button variant="contained" onClick={previousPage}>
        Previous
      </Button>
      <Button variant="contained" onClick={nextPage}>
        Next
      </Button>
    </>
  );
};

export default PokemonPagination;

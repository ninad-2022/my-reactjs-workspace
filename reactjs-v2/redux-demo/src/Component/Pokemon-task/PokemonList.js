import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPokemon } from "./PokemonSlice";
import PaginatedItems from "./ReactPaginate";

const PokemonList = () => {
  const pokemonData = useSelector(selectPokemon);
  const pokemon = pokemonData?.data;

  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {Array.isArray(pokemon) &&
          pokemon.map((pok, i) => {
            const [attackOne, attackTwo] = pok.attacks;

            let ability = "";
            if (pok.abilities) {
              const [a] = pok?.abilities;
              ability = a;
            } else {
              // pok.abilities = { name: "NA", text: "NA", type: "NA" };
            }
            return (
              <section
                style={{
                  width: "300px",
                  border: "2px solid #999",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <img src={pok.images.large} style={{ width: "100%" }} />
                <h4>Name-{pok.name}</h4>
                <p>HP-{pok.hp}</p>
                <hr />
                <div>
                  <strong>Attacks:-{attackOne?.name}</strong>
                  <p>{attackOne?.name ? attackOne.name : "NA"}</p>
                  <p>Cost:-{attackOne?.cost ? attackOne.cost : "NA"}</p>
                  <p>
                    ConvertedEnergyCost:-
                    {attackOne?.convertedEnergyCost
                      ? attackOne.convertedEnergyCost
                      : "NA"}
                  </p>
                  <p>Damage:-{attackOne?.damage ? attackOne.damage : "NA"}</p>
                  <p>Text:-{attackOne?.text ? attackOne.text : "NA"}</p>
                  <hr />
                  <strong>Attacks:-{attackTwo?.name}</strong>
                  <p>Cost:-{attackTwo?.cost}</p>
                  <p>ConvertedEnergyCost:-{attackTwo?.convertedEnergyCost}</p>
                  <p>Damage:-{attackTwo?.damage}</p>
                  <p>Text:-{attackTwo?.text}</p>
                </div>
                <div>
                  <strong>
                    Abilities:-{ability?.name ? ability.name : "NA"}
                  </strong>
                  <p>{ability?.text ? ability.text : "NA"}</p>
                  <p>{ability?.type ? ability.type : "NA"}</p>
                </div>
              </section>
            );
          })}
      </section>
      {/* <PaginatedItems data={pokemon} /> */}
    </>
  );
};

export default PokemonList;

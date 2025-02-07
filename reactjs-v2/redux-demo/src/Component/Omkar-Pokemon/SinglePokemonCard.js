import React from "react";
const SinglePokemonCard = ({ name, hp, level, abilities, attacks, images }) => {
  return (
    <>
      <div
        style={{ width: 210, margin: 5, padding: 10, backgroundColor: "white" }}
      >
        <img src={images.small} style={{ width: "100%" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>{name}</strong>
          <div>
            <strong>HP -</strong> <span>{hp}</span>
          </div>
        </div>
        <h4>Attacks -</h4>
        <span>
          {attacks ? attacks.map((attack) => attack.name + ", ") : "N/A"}
        </span>
        <h4>Abilities -</h4>
        <span>
          {abilities ? abilities.map((ability) => ability.name) : "N/A"}
        </span>
      </div>
    </>
  );
};

export default SinglePokemonCard;

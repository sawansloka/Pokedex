import React from 'react';

const PokeCard = ({ pokemon }) => {
  return (
    <div className="card" key={pokemon.id}>
      <div className="card-header">
        <b>
          <img src={pokemon.sprites['front_default']} /> {pokemon.name}
        </b>
      </div>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6>Id: {pokemon.id}</h6>
              <h6>Weight: {pokemon.weight}</h6>
              <h6>Defense: {pokemon.stats[2].base_stat}</h6>
              <h6>Hp: {pokemon.stats[0].base_stat}</h6>
              <img src={pokemon.sprites['front_shiny']} />
            </div>
            <div className="col-md-6">
              <h6>Type: {pokemon.types[0].type.name}</h6>
              <h6>Height: {pokemon.height}</h6>
              <h6>Species: {pokemon.species.name}</h6>
              <h6>Attack: {pokemon.stats[1].base_stat}</h6>
              <img src={pokemon.sprites['back_shiny']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;

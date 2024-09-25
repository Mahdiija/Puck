import React from 'react';
import axios from 'axios';

const fetchPokemonData = async () => {
  const pokemonIds = [1, 2, 3, 4];

  return Promise.all(
    pokemonIds.map(async (id) => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    })
  );
};

const createPokemonResource = (fetchFunction) => {
  let status = 'pending';
  let result;
  const promise = fetchFunction()
    .then(res => {
      status = 'success';
      result = res;
    })
    .catch(err => {
      status = 'error';
      result = err;
    });

  return {
    read() {
      if (status === 'pending') {
        throw promise; 
      } else if (status === 'error') {
        throw result; 
      }
      return result; 
    },
  };
};


const pokemonResource = createPokemonResource(fetchPokemonData);

const PokemonCards = () => {
  const pokemons = pokemonResource.read(); 

  return (
    <div>
      <h1>Pokémon Cards</h1>
      <div className='Card'>
        {pokemons.map((pokemon) => (
          <div className=' item' key={pokemon.id}>
            <h2  className='center'>{pokemon.name}</h2>
            <img  className='center'src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p className='center'>Height: {pokemon.height}</p>
            <p className='center'>Weight: {pokemon.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCards;
import React from 'react';
import './App.css';
import pokemons from './data';
import GetPokemons from './Pokemon';

function App () {
  return (
    <div className='main'>
      <h1 className='title'>Pokedex</h1>
      <div className='pokedex'>
        {pokemons.map((pokemon) => (
          <GetPokemons key={pokemon.id} dados={pokemon}/>
        ))}
      </div>
    </div>
  )
}

export default App;

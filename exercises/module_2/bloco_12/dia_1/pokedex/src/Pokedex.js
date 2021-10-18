import React from 'react';
import Buttons from './Components/Buttons';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    const { pokemons } = this.props;

    this.state = {
      pokemonPosition: 0,
      pokemonsCollection: pokemons,
    }

    this.NextPokemon = this.NextPokemon.bind(this);
    this.handleType = this.handleType.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  NextPokemon() {
    const { pokemonPosition, pokemonsCollection } = this.state;

    if (pokemonPosition === pokemonsCollection.length - 1) {
      this.setState({ pokemonPosition: 0 });
    } else {
      this.setState(({ pokemonPosition }) => ({
        pokemonPosition: pokemonPosition + 1,
      }));
    }
  }

  handleType({ target }) {
    const { pokemons } = this.props;

    this.setState({ pokemonPosition: 0 });

    const filtredPokemons = pokemons.filter((pokemon) => {
      return pokemon.type === target.id;
    });

    this.setState({ pokemonsCollection: filtredPokemons });

  }

  resetFilter() {
    const { pokemons } = this.props;
    this.setState({ pokemonsCollection: pokemons });
  }

  render() {
    const { pokemonPosition, pokemonsCollection } = this.state;

    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonsCollection[pokemonPosition] } />
        </div>
        
        <Buttons handleType={ this.handleType } resetFilter={ this.resetFilter }/>

        <button onClick={ this.NextPokemon }>Next</button>

      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.object,
        image: PropTypes.string,
        moreInfo: PropTypes.string,

      }
    )
  ).isRequired,
}

export default Pokedex;

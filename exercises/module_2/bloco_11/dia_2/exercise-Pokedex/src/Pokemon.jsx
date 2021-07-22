import React from "react";
import PropTypes from 'prop-types';

class GetPokemons extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='info'>
          <h3>{this.props.dados.name}</h3>
          <p>Type: {this.props.dados.type}</p>
          <p>Peso: {this.props.dados.averageWeight.value} {this.props.dados.averageWeight.measurementUnit}</p>   
        </div>
        <img className='img' src={this.props.dados.image} alt="" />
      </div>
    );
  }
}

GetPokemons.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string
}

export default GetPokemons;
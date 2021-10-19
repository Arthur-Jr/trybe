import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  render() {
    const { resetFilter, handleType } = this.props

    return(
      <div className="Type-btn-container">
        <button onClick={ resetFilter }>All</button>

        <button id="Fire" onClick={ handleType }>Fire</button>
        <button id="Psychic" onClick={ handleType }>Psychic</button>
        <button id="Electric" onClick={ handleType }>Electric</button>
        <button id="Bug" onClick={ handleType }>Bug</button>
        <button id="Poison" onClick={ handleType }>Poison</button>
        <button id="Normal" onClick={ handleType }>Normal</button>
        <button id="Dragon" onClick={ handleType }>Dragon</button>
        
      </div>
    );
  }
}

Buttons.propTypes = {
  resetFilter: PropTypes.func.isRequired,
  handleType: PropTypes.func.isRequired,
}

export default Buttons;

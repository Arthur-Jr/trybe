import React from 'react';
import PropType from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { handleChange, storyline } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          cols="20"
          rows="5"
          name="storyline"
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Storyline;

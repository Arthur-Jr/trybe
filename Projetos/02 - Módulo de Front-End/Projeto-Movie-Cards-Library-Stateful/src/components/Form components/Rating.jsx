import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { handleChange, rating } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação:
        <input
          type="number"
          name="rating"
          id="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
          max="5"
          min="0"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropType.oneOfType([PropType.string, PropType.number]).isRequired,
  handleChange: PropType.func.isRequired,
};

export default Rating;

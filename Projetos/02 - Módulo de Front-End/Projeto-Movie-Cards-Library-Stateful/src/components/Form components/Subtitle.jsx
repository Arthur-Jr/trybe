import React from 'react';
import PropType from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { handleChange, subtitle } = this.props;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Subtitle;

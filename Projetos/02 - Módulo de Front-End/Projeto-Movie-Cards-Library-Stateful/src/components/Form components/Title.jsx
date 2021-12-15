import React from 'react';
import PropType from 'prop-types';

class Title extends React.Component {
  render() {
    const { handleChange, title } = this.props;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título:
        <input
          type="text"
          id="title"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Title;

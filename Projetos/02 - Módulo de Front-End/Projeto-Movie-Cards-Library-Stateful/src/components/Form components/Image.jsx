import React from 'react';
import PropType from 'prop-types';

class Image extends React.Component {
  render() {
    const { handleChange, imagePath } = this.props;

    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          id="image"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Image;

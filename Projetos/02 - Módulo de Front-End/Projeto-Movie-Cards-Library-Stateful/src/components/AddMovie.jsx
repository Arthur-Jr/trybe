import React from 'react';
import PropType from 'prop-types';
import Title from './Form components/Title';
import Subtitle from './Form components/Subtitle';
import Image from './Form components/Image';
import Storyline from './Form components/Storyline';
import Rating from './Form components/Rating';
import Genre from './Form components/Genre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(onClick) {
    onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="Add-Form">

        <Title handleChange={ this.handleChange } title={ title } />
        <Subtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <Image handleChange={ this.handleChange } imagePath={ imagePath } />
        <Storyline handleChange={ this.handleChange } storyline={ storyline } />
        <Rating handleChange={ this.handleChange } rating={ rating } />
        <Genre handleChange={ this.handleChange } genre={ genre } />

        <button
          type="button"
          data-testid="send-button"
          onClick={ (() => this.handleClick(onClick)) }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;

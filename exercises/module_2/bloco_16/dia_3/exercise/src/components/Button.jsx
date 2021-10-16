import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { handleClick, text } = this.props;

    return(
      <button type="button" onClick={ handleClick }>{ text }</button>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

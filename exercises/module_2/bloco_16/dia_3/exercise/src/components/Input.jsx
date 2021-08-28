import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { name, onChange, type, value } = this.props;
    return(
      <label htmlFor={ name }>
        { `${name}: ` }

        <input
          id={ name }
          name={ name }
          onChange={ onChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

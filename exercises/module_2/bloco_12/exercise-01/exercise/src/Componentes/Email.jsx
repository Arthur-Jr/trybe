import React from "react";

class Email extends React.Component {
  render() {

    const { handleChange, value } = this.props;

    return (
      <label htmlFor="email">
        Email:
        <input
        type="text"
        name="email"
        id="email"
        maxLength="50"
        required
        value={ value }
        onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Email;

import React from "react";

class Endereço extends React.Component {
  render() {

    const { handleChange, value } = this.props;

    return (
      <label htmlFor="endereço">
        Endereço:
        <input
        type="text"
        name="endereço"
        id="endereço"
        maxLength="200"
        required
        value={ value.replace(/[^a-zA-Z0-9 .ç]/g, "") }
        onChange={ handleChange }
        />
      </label>
      // Link onde encontrei sobre o replace com regex:
      // https://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
    );
  }
}

export default Endereço;

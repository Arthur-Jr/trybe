import React from "react";

class CPF extends React.Component {
  render() {

    const { handleChange, value } = this.props;

    return (
      <label htmlFor="cpf">
        CPF:
        <input
        type="text"
        name="cpf"
        id="cpf"
        maxLength="11"
        required
        value={ value }
        onChange={ handleChange }
        />
      </label>
    );
  }
}

export default CPF;
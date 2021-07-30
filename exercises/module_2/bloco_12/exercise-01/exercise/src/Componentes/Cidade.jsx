import React from "react";

class Cidade extends React.Component {
  render() {

    const { handleChange, value, handleBlur } = this.props;

    return (
      <label htmlFor="cidade">
        Cidade:
        <input
        type="text"
        name="cidade"
        id="cidade"
        maxLength="28"
        required
        value={ value }
        onChange={ handleChange }
        onBlur={ handleBlur }
        />
      </label>
    );
  }
}

export default Cidade;

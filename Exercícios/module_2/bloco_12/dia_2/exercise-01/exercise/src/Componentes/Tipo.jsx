import React from "react";

class Tipo extends React.Component {
  render() {

    const { handleChange, valueC, valueA } = this.props;

    return (
      <label htmlFor="tipo">

      <label htmlFor="apartamento">
        Apartamento:
        <input
        type="radio"
        name="tipo"
        id="apartamento"
        value={ valueA }
        onChange={ handleChange }
        />
      </label>

      <label htmlFor="casa">
        Casa:
        <input
        type="radio"
        name="tipo"
        id="casa"
        value={ valueC }
        onChange={ handleChange }
        />
      </label>

      </label>
    );
  }
}

export default Tipo;
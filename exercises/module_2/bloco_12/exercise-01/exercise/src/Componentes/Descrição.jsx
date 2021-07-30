import React from "react";

class Descrição extends React.Component {
  render() {

    const { handleChange, value } = this.props;

    return (
      <label htmlFor="descrição">
        Descrição:
        <textarea
        type="text"
        name="descrição"
        id="descrição"
        maxLength="40"
        required
        value={ value }
        onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Descrição;

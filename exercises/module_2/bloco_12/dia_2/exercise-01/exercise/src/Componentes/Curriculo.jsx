import React from "react";

class Curriculo extends React.Component {
  render() {

    const { handleChange, value } = this.props;

    return (
      <label htmlFor="curriculo">
        Curriculo:
        <textarea
        type="text"
        name="curriculo"
        id="curriculo"
        maxLength="1000"
        required
        value={ value }
        onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Curriculo;

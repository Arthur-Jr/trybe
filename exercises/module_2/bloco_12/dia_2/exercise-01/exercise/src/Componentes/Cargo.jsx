import React from "react";

class Cargo extends React.Component {
  render() {

    const { handleChange, value, handleMouseEnter } = this.props;

    return (
      <label htmlFor="cargo">
        Cargo:
        <textarea
        type="text"
        name="cargo"
        id="cargo"
        maxLength="40"
        required
        value={ value }
        onChange={ handleChange }
        onMouseEnter={ handleMouseEnter }
        />
      </label>
    );
  }
}

export default Cargo;

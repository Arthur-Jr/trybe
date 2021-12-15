import React from "react";

class Name extends React.Component {
  render() {
    
    const { handleChange, value } = this.props;
    
    return (
      <label htmlFor="name">
        Nome:
        <input 
        type="text"
        name="name"
        id="name"
        maxLength="40"
        required
        value={ value.toUpperCase() }
        onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Name;
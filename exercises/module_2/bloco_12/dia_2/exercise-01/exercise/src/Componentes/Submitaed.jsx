import React from 'react';

class Submitted extends React.Component {
  render() {
    const { name, email, cpf, endereço, cidade, estado,
      tipo, curriculo, cargo, descrição } = this.props;

    return(
      <div>
        <p>Name: { name }</p>
        <p>Email: { email }</p>
        <p>CPF: { cpf }</p>
        <p>Endereço: { endereço }</p>
        <p>Cidade: { cidade }</p>
        <p>Estado: { estado }</p>
        <p>Moradia: { tipo }</p>
        <p>Curriculo: { curriculo }</p>
        <p>Cargo: { cargo }</p>
        <p>Descrição: { descrição }</p>
      </div>
    );
  }
}

export default Submitted;

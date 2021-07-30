import React from "react";

class Estado extends React.Component {
  render() {

    const { handleChange, value } = this.props;

    return (
      <label htmlFor="estado">
        Estado:
        <select name="estado" id="estado" required value={ value }
        onChange={ handleChange }>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="ES">Espiríto Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato do Grosso do Sul</option>
          <option value="MG">minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="Se">Sergipe</option>
          <option value="TO">Tocantins</option>
          <option value="DF">Distrito Federal</option>
        </select>
      </label>
    );
  }
}

export default Estado;
  
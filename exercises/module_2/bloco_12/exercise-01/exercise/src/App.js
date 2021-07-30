import React from 'react';
import './App.css';
import Cargo from './Componentes/Cargo';
import Cidade from './Componentes/Cidade';
import CPF from './Componentes/CPF';
import Curriculo from './Componentes/Curriculo';
import Descrição from './Componentes/Descrição';
import Email from './Componentes/Email';
import Endereço from './Componentes/Endereço';
import Estado from './Componentes/Estados';
import Name from './Componentes/Name';
import Submitted from './Componentes/Submitaed';
import Tipo from './Componentes/Tipo';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      cpf: "",
      endereço: "",
      cidade: "",
      estado: "",
      apartamento: false,
      casa: false,
      tipo: "",
      curriculo: "",
      cargo: "",
      descrição: "",
      mouseEnter: 0,
      submited: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({ [target.name]: value })
    target.type === 'radio' && this.setState({ tipo: <target className="id"></target> });
  }

  handleBlur({ target }) {
    const first = target.value[0];
    if (parseInt(first) || first === '0') {
      this.setState({ cidade: '' });
    }
  }

  handleMouseEnter() {
    if(this.state.mouseEnter === 0) {
      alert("Preencha com cuidado esta informação.") 
    }
    this.setState({ mouseEnter: 1 });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submited: true,
    })
  }

  handleClear() {
    this.setState({
      name: "",
      email: "",
      cpf: "",
      endereço: "",
      cidade: "",
      estado: "",
      apartamento: false,
      casa: false,
      tipo: "",
      curriculo: "",
      cargo: "",
      descrição: "",
      mouseEnter: 0,
    })
  }
  
  render() {
    return (
      <main>
        <form>
          <fieldset>
            <Name handleChange={this.handleChange} value={this.state.name} />
            <Email handleChange={this.handleChange} value={this.state.email} />
            <CPF handleChange={this.handleChange} value={this.state.cpf} />
            <Endereço handleChange={this.handleChange} value={this.state.endereço} />
            <Cidade handleChange={this.handleChange} value={this.state.cidade} 
            handleBlur={ this.handleBlur } />
            <Estado handleChange={this.handleChange} value={this.state.estado} />
            <Tipo handleChange={this.handleChange} valueC={this.state.casa} valueA={this.state.apartamento} />
          </fieldset>

          <fieldset>
            <Curriculo handleChange={this.handleChange} value={this.state.curriculo} />
            <Cargo handleChange={this.handleChange} value={this.state.cargo} 
            handleMouseEnter={this.handleMouseEnter} />
            <Descrição handleChange={this.handleChange} value={this.state.descrição} />
          </fieldset>

          {this.state.submited && <Submitted 
           name={ this.state.name }
           email={ this.state.email }
           cpf={ this.state.cpf }
           endereço={ this.state.endereço }
           cidade={ this.state.cidade }
           estado={ this.state.estado }
           tipo={ this.state.tipo }
           curriculo={ this.state.curriculo }
           cargo={ this.state.cargo }
           descrição={ this.state.descrição }
          />}

          <button type="submit" onClick={this.handleSubmit}>Enviar</button>
          <button onClick={this.handleClear}>Clear</button>
          <div>{ this.state.newRegister }</div>
        </form>
      </main>
    );
  }
}

export default App;

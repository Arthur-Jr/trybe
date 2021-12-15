import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { addClient } from '../redux/actions';
import validateEmail from '../services/EmailValidate';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: 0,
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  checkEmail(email) {
    const { clients } = this.props;
    return clients.some((client) => client.email === email);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { email } = this.state;

    if(this.checkEmail(email)) {
      alert('Email já cadastrado');
    } else if (validateEmail(email)) {
      const { newClient } = this.props;
      const infos = { ...this.state };
      newClient(infos);
    } else {
      alert('Email invalido');
    }
  }

  backClick() {
    const { history } = this.props;
    history.push('/clients');
  }

  render() {
    const { nome, idade, email } = this.state;
    const { login } = this.props;

    if(login.user === undefined ) {
      return(<div><h1>Login não efetuado</h1></div>);
    }

    return(
      <div>
        <Input
          name={ 'nome' }
          onChange={ this.handleChange }
          type={ 'text' }
          value={ nome }
        />       
        <Input
          name={ 'idade' }
          onChange={ this.handleChange }
          type={ 'number' }
          value={ idade }
        />
        <Input
          name={ 'email' }
          onChange={ this.handleChange }
          type={ 'email' }
          value={ email }
        />
        <Button handleClick={ this.handleClick } text={ 'Cadastrar' } />
        <Button handleClick={ this.backClick } text='Voltar' />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer,
  clients: state.addReducer,
});

const mapDispatchToProps = (dispatch) => ({
  newClient: (client) => dispatch(addClient(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

Register.propTypes = {
  login: PropTypes.shape({
    user: PropTypes.any,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  clients: PropTypes.arrayOf(PropTypes.object),
  newClient: PropTypes.func.isRequired,
};

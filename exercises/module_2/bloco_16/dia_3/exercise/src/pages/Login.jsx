import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import validateEmail from '../services/EmailValidate';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { history, loginDispatch } = this.props;
    const { user, password } = this.state;
    const userValidate = validateEmail(user);
    const passwordValidate = this.validatePassword(password);

    if( userValidate && passwordValidate ) {
      const data = { ...this.state };
      loginDispatch(data);
      history.push('/clients');
    } else {
      alert('Usuario ou senha invalido');
    }
  }

  validatePassword(password) {
    return password.length >= 6 ? true : false;
  }

  render() {
    const { user, password } = this.state;

    return(
      <div>
        <Input
          name={ 'user' }
          type={ 'text' }
          onChange={ this.handleChange }
          value={ user }
        />

        <Input
          name={ 'password' }
          type={ 'password' }
          onChange={ this.handleChange }
          value={ password }
        />

        <Button handleClick={ this.handleClick } text='Logar' />
      </div>
    );
  }
}

const mapToDispatchToProps = (dispatch) => ({
  loginDispatch: (loginData) => dispatch(login(loginData)),
});

export default connect(null, mapToDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loginDispatch: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { addClient } from '../redux/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      idade: 0,
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { newClient } = this.props;
    const infos = { ...this.state };
    newClient(infos);
  }

  render() {
    const { name, idade, email } = this.state;
    const { login } = this.props;

    if(login.user === undefined ) {
      return(<div><h1>Login não efetuado</h1></div>);
    }

    return(
      <div>
        <Input
          name={ 'name' }
          onChange={ this.handleChange }
          type={ 'text' }
          value={ name }
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer
});

const mapDispatchToProps = (dispatch) => ({
  newClient: (client) => dispatch(addClient(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

Register.propTypes = {
  login: PropTypes.shape({
    user: PropTypes.any,
  }).isRequired,
  newClient: PropTypes.func.isRequired,
};

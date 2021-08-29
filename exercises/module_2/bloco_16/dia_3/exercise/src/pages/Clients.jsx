import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class Clients extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/register');
  }

  render() {
    const { login } = this.props;
    
    if(login.user === undefined ) {
      return(<div><h1>Login não efetuado</h1></div>);
    }

    return(
      <div>
        <h1>Nenhum cliente cadastrado</h1>
        <Button handleClick={ this.handleClick } text='Cadastrar cliente' />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer
});

export default connect(mapStateToProps, null)(Clients);

Clients.propTypes = {
  login: PropTypes.shape({
    user: PropTypes.any,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

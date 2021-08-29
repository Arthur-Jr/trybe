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

  displayClients() {
    const { clients } = this.props;
    return clients.map((client) => {
      const { nome, idade, email } = client;
      return <div key={ email }>
        <p>{`Nome: ${nome}`}</p>
        <p>{`Idade: ${idade}`}</p>
        <p>{`Email: ${email}`}</p>
      </div>;
    });

  }

  render() {
    const { login, clients } = this.props;
    const noClient = <h1>Nenhum cliente cadastrado</h1>;
    
    if(login.user === undefined ) {
      return(<div><h1>Login não efetuado</h1></div>);
    }

    return(
      <div>
        { clients.length === 0 ? noClient : this.displayClients() }
        <Button handleClick={ this.handleClick } text='Cadastrar cliente' />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer,
  clients: state.addReducer,
});

export default connect(mapStateToProps, null)(Clients);

Clients.propTypes = {
  login: PropTypes.shape({
    user: PropTypes.any,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  clients: PropTypes.arrayOf(PropTypes.object),
};

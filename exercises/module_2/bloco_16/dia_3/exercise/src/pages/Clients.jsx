import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { removeClient } from '../redux/actions';

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
    return clients.map((client, index) => {
      const { nome, idade, email } = client;
      return <div key={ email }>
        <p>{`Nome: ${nome}`}</p>
        <p>{`Idade: ${idade}`}</p>
        <p>{`Email: ${email}`}</p>
        <Button
          handleClick={ () => this.removeClick(index) }
          text='Remover cliente'
        />
      </div>;
    });
  }

  removeClick(index) {
    const { clients, remove } = this.props;
    const newClientList = [...clients];
    newClientList.splice(index, 1);
    remove(newClientList);
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

const mapDispatchToProps = (dispatch) => ({
  remove: (clients) => dispatch(removeClient(clients)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

Clients.propTypes = {
  login: PropTypes.shape({
    user: PropTypes.any,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  clients: PropTypes.arrayOf(PropTypes.object),
  remove: PropTypes.func.isRequired,
};

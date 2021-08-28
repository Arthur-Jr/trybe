import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    return(
      <div>
        <button type="button" onClick={ this.handleClick }>Fazer Login</button>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

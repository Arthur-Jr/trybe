import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

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
        <Button handleClick={ this.handleClick } text='Fazer Login' />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

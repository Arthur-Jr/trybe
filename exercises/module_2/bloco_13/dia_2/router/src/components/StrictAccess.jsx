import React from 'react';
import { Link } from 'react-router-dom';

class StrictAccess extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "joao",
      password: "1234",
    }
  }

  render() {
    const { user } = this.props;
    const { username, password } = this.state;
    return(
      <div>
        <Link to="/">Home</Link>
        {username === this.state.username && password === user.password ? <p>Welcome joao!</p> : alert('Access denied')}
      </div>
    );
  }
}

export default StrictAccess;
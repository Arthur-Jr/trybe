import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/Users">Users</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/strict-access">Strict-Access</Link>
        <h2>Home</h2>
        <p> My awesome Home component </p>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    const user = {
      username: "joao",
      password: "1234",
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={ About } />
          <Route exact path="/users/:id" render={ (props) => <Users {...props} /> } />
          <Route path="/strict-access" render={ () => <StrictAccess user={ user } />} />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

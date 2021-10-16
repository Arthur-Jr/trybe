import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Clients from './pages/Clients';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login }/>
      <Route path="/clients" component={ Clients }/>
      <Route path="/register" component={ Register }/>
      <Route path="/" component={ Home }/>
    </Switch>
  );
}

export default App;

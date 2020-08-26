import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Accueil from './components/Accueil';
import Login from './components/Login';
import Contact from './components/Contact';
import './css/bootstrap.min.css'
import './css/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Switch>
      <Route path = "/" exact component={Accueil}/>
      <Route path = "/Login" component={Login}/>
      <Route path = "/Contact" component= {Contact}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

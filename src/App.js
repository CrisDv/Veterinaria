import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'hover.css'
import '@material-ui/core'

import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Route path="/" component={Navigation}/>
      <Route path="/" exact component={Home}/>
      <Route path="/Login" component={Login}/>
    </Router>
  );
}

export default App;

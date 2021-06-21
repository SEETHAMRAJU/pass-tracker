import React, { Component } from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect

} from "react-router-dom";


import Login from './pages/Login';
import pageNotFound from './pages/404';
import addEntry from './pages/addEntry';
import signUp from './pages/signup';
import dashboard from './pages/dashboard';
class App extends Component{
  render(){
    return <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={signUp}/>
        <Route exact path="/dashboard" component={dashboard}/>
        <Route exact path="/addEntry" component={addEntry}/>
        <Route exact path="/404" component={pageNotFound}/>
        <Redirect to="/404"/>
      </Switch>
    </Router>
  }
}

export default App;

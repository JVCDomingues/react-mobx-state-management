import React from 'react';

import { 
  BrowserRouter as Router, Switch, Route 
} from 'react-router-dom';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>
  )
}

export default Routes;
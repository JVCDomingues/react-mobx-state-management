import React from 'react';

import { 
  BrowserRouter as Router, Switch, Route 
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <PrivateRoute path="/home" component={Home}/>
      </Switch>
    </Router>
  )
}

export default Routes;
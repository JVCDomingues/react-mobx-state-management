import React from 'react';

import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route 
      {...rest}
      render={props => 
        localStorage.getItem('username') ? (
          <Component {...props}/>
        ) : (
          <Redirect 
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
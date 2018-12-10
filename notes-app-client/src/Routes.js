import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

export default () => 
// switch component renders first matching route
  <Switch>
  {/* needs exact otherwise matches any path that starts with / */}
    <Route path="/" exact component={Home} />
  </Switch>
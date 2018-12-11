import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import  NotFound from './containers/NotFound';

export default () => 
  // switch component renders first matching route
  <Switch>
    {/* needs exact otherwise matches any path that starts with / */}
    <Route path="/" exact component={Home} />
    <Route path='/login' exact component={Login} />

    {/* used to catch and direct 404 errors properly */}
    <Route component={NotFound} />
  </Switch>
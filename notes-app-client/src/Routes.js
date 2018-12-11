import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import  NotFound from './containers/NotFound';

export default () => 
  // switch component renders first matching route
  <Switch>
    {/* needs exact otherwise matches any path that starts with / */}
    <Route path="/" exact component={Home} />

    {/* used to catch and direct 404 errors properly */}
    <Route component={NotFound} />
  </Switch>
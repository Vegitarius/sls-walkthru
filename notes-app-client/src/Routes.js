import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import NewNote from './containers/NewNote';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) => 
  // switch component renders first matching route
  <Switch>
    {/* needs exact otherwise matches any path that starts with / */}
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path='/signup' exact component={Signup} prop={childProps} />
    <AppliedRoute path='/login' exact component={Login} props={childProps} />
    <AppliedRoute path='/notes/new' exact component={NewNote} props={childProps} />
    

    {/* used to catch and direct 404 errors properly */}
    <Route component={NotFound} />
  </Switch>
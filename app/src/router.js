import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch,IndexRoute, Redirect } from 'react-router';

import Login from './components/login/login.js';
import App from './mainpage.js';
import Account from './container/account/account.js';

export default (  
          <Switch>
           <Route  path="/app/account" component={Account} />
           <Route extra path="/app/account" component={Account} />
           </Switch>
  );

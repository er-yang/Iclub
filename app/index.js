var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter  } from 'react-router-dom';
import { Route, Switch,IndexRoute, Redirect } from 'react-router';


import Login from './src/components/login/login.js';
import App from './src/mainpage.js';


ReactDOM.render(
    <BrowserRouter >
      <div>
         <Route  path="/login" component={Login} />
         <Route  path="/app" component={ App } />
         </div>
    </BrowserRouter>,
   document.getElementById('init')
);

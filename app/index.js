var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import { BrowserRouter  } from 'react-router-dom';
import { Route, Switch,IndexRoute, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './src/store/configureStore.js';


import Login from './src/components/login/login.js';
import App from './src/mainpage.js';

const store = configureStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);
//history.listen(location => analyticsService.track(location.pathname));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter  history={history} >
      <div>
         <Route  path="/login" component={Login} />
         <Route  path="/app" component={ App } />
         </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('init')
);

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
// import { browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers/rootReducer.js';
import devTools from 'remote-redux-devtools';
const browserHistory = createBrowserHistory();
const logger = createLogger();
const router = routerMiddleware(browserHistory);

const enhancer = compose(
  applyMiddleware(thunkMiddleware, promise, logger, router),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
   const storeCreator = createStore(rootReducer, initialState,enhancer);
   return storeCreator;
}

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import  accoutReducer  from './account/accountReducer.js';
//console.log('accoutReducer is ',accoutReducer);
const rootReducer = combineReducers({

  routing: routerReducer
});

export default rootReducer;

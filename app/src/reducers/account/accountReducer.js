import initialState from '../initialState.js';
import {  createReducer } from 'redux-act';
import  * as action from '../../action/account/accountAction.js';
var Objectassign = require('object-assign');
 const accoutReducer=createReducer(function(on ,off){
  on(action.account_requst,(state,content)=>Objectassign(state+content));
  on(action.account_recive,(state,content)=>Objectassign(state,content));
});
export default accoutReducer;

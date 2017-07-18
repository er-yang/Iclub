import { createAction, createReducer } from 'redux-act';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

export const account_requst=createAction('ACCOUNT_REQUST',()=>({isFetching: true}));
export const account_recive=createAction('ACCOUNT_RECIVE',(account)=>account);

export function fetchAccounts(){
  return dispatch=>{
    console.log('account_requst is ',account_requst());
         dispatch(account_requst());
         return(
           fetch("http://apiv2.vmovier.com/api/post/getPostInCate?cateid=0&p=1",{
      method:"get",
      mode:"nocors",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
      }
    }).then((res) => {   return res.text(); })
      .then((data) => {
        const accounts = {
              isFetching: false,
              meta: {
                total: data.total,
                perPage: 10,
                page: 1
              },
              data: data.rowData
            };
        dispatch(account_recive(accounts)); })
      .catch((e) => { console.log(e.message);})
         )
  }
}

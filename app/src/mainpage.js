import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
//import { fetchExit } from './actions/exit/exitActions.js';

//import Routes from './router.js';
//import {Layout,Avatar} from 'antd';
//import Sidebar from './components/sidebar/sidebar.js';

// import './mainpage.less';
// import 'fetch-ie8/fetch.js';
// import 'whatwg-fetch';
// import 'es6-promise/dist/es6-promise.min.js';
// 引入垫片兼容IE

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleExit(e){
      e.preventDefault();
    }
    componentDidMount(){
      let formdata =new FormData();
      formdata.append('client_id',"6051c3bfde939d051168457fc95775c44805ccc5a0075ab958106f74aa52444d");
      fetch("https://api.dribbble.com/v1/projects/3",{
     method:"get",
     mode:"cors",
     credentials:"include",
     headers:{
       'Authorization':`Bearer 8be481f22985d10b3d21926289c4148edcb2774abe2acad1ae3fe539edf6064a`
     }
   }).then((res) => {return res.json();})
     .then((data) => {
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    });
  // let httpRequest = new XMLHttpRequest();
  // httpRequest.addEventListener("load",function(){console.log('complete')});
  // httpRequest.open("get","https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290");
  // httpRequest.send();
  }

    render() {
        return (
            <div>

            </div>

        )
    }
}

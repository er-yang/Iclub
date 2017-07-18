import React from 'react';
import { Link } from 'react-router-dom';
import { Card,Tabs,Button,Input,Icon} from 'antd';
require( './login.less');
import createBrowserHistory from 'history/createBrowserHistory';

const TabPane=Tabs.TabPane;
export default class Login extends React.Component {
  constructor(props){
    super(props);
  }
  handSubmit(){
    console.log('this is psuh')
  }
  render(){

    return(
      <div className='main-warp'>
        <Card style={{width:400,height:400}} bodyStyle={{padding:0}}>
          <div  className='login-block' >
          <div className="login-block-logo">
          {/*  <img src={require("../../img/background.jpg")} style={{width:'50%',height:"100%"}}/>*/}
          <span style={{fontSize:'-webkit-xxx-large',fontFamily:'-webkit-pictograph'}}>SING IN</span>
          </div>
          <div className="login-block-context">
            <span className='context-span'>
            {/*  <span type="user" className='icon-lable'><Icon type="user" /></span>*/}
              <Input size="large" placeholder="Enter your account"/>
            </span>
            <span className='context-span'>
            {/*  <span type="user" className='icon-lable'><Icon type="user" /></span>*/}
              <Input size="large" placeholder="Enter your password"/>
            </span>
            <span className='context-span'>
              <Link to='/app'><Button >sign in</Button></Link>
            </span>
          </div>
        </div>
        </Card>
      </div>
    );
  }
}

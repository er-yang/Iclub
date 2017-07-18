import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class Sidebar extends React.Component{
  render(){
    return(
      <Menu style={{width:"100%",height:"100%"}} mode='inline'>
        <Menu.Item key='1'>基本管理</Menu.Item>
        <SubMenu key='2' title={<span>系统管理</span>}>
            <Menu.Item key='3'><Link to='/app/account'>登录信息管理</Link></Menu.Item>
           <Menu.Item key='4'><Link to='/app/account'> 人员管理</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

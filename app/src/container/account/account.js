import React from 'react';
import { Table, Tooltip, Button,Card,Icon} from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAccounts} from '../../action/account/accountAction.js';
function mapStateToProps(state) {
   return { accounts: state.accounts };
}

function mapDispatchToProps(dispatch) {
  // bindActionCreators(ActionCreators, dispatch)
  return {
    fetchAccounts: (param0,param1) => dispatch(fetchAccounts(param0,param1))
  };
}

export  class Account extends React.Component{
    constructor(props){
      super(props);
    }
    componentDidMount(){
      console.log('fetchAccounts is ',fetchAccounts);
      this.props.fetchAccounts();
    }
    render(){
      const columns = [{
          title: '序号',
          render:(text,record,index) => (
            <span>{index+1}</span>
          )
      },{
          title: '账号',
          dataIndex: 'ACCOUNTID'
      }, {
          title: '登录名',
          dataIndex: 'LOGINNAME'
      },{
          title: '姓名',
          dataIndex: 'ACCOUNTNAME'
      }, {
          title: '性别',
          dataIndex: 'SEX',
          render:(text) => ( (text==0)?"女":"男" )
      },{
          title: '年龄',
          dataIndex: 'AGE'
      }, {
          title: '机构',
          dataIndex: 'INSTITUTIONNAME'
      }, {
          title: '部门',
          dataIndex: 'DEPARTMENTNAME'
      }, {
          title: '个性签名',
          dataIndex: 'SIGNATURE'
      }, {
          title: '状态',
          dataIndex: 'STATE',
          render:(text) => ( (text==0)?"禁用":"启用" )
      }, {
          title: '操作',
          dataIndex: 'handle',
          render:
              (text,record,index) => (
                  <span>
                      <Tooltip title="编辑"><Link to={"/" }><Icon type="edit" /></Link></Tooltip>&nbsp;&nbsp;
                      <Tooltip title="查看"><Link to={"/" }><Icon type="filetext" /></Link></Tooltip>&nbsp;&nbsp;
                  </span>
              )
      }];

      return(
            <div className='content'>
              <Card title=' ' extra={
                      <div id="tools" className="div-right" style={{marginBottom: 10}}>
                        <span>
                            <Tooltip title="新增" ><Link to="/"><Icon type="plus" /></Link></Tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Tooltip title="删除"><Link to="/"><Icon type="delete" style={{color:'red'}}/></Link></Tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      </div>
                    } style={{height:'auto' }}>
                    <Table

                        dataSource={ [] }
                        columns={ columns }
                        size="middle"
                        loading={ false }
                    />
              </Card>
            </div>
      );
    }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);

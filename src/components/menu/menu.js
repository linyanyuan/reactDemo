// 左侧menu
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import { withRouter } from 'react-router-dom';
class menus extends Component{
    constructor(props){
        super(props)
        this.state={
            path:props.location.pathname.split('/app')[1] ? props.location.pathname.split('/app')[1] : '/home'
        }
    }
    toggleClick = e =>{
        this.props.history.push({
            pathname:`/app${e.key}`
        })
    }
    componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname.split('/app')[1] ? nextProps.location.pathname.split('/app')[1] : '/home'
        this.setState({
            path:path
        })
    }
    render(){
        return (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['/home']} 
                selectedKeys={[this.state.path]}    
                onClick={this.toggleClick}>
                <Menu.Item key="/home">
                    <Icon type="user"></Icon>
                    <span>我的账单</span>
                </Menu.Item>
                <Menu.Item key="/info">
                    <Icon type="desktop"></Icon>
                    <span>详细信息</span>
                </Menu.Item>
                <Menu.Item key="/message">
                    <Icon type="inbox"></Icon>
                    <span>Dashboard1</span>
                </Menu.Item>
                <Menu.Item key="/youth">
                    <Icon type="fire" theme="outlined" spin={false}></Icon>
                    <span>我的青春</span>
                </Menu.Item>
            </Menu>
        )
    }
}
export default withRouter(menus)
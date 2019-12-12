// 左侧menu
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import { withRouter } from 'react-router-dom';
class menus extends Component{
    constructor(props){
        super(props)
    }
    toggleClick = e =>{
        this.props.history.push({
            pathname:`/app${e.key}`
        })
    }
    render(){
        let path = this.props.location.pathname;
        path = path.split('/app')[1] ? path.split('/app')[1] : '/home'
        return (
            <Menu theme="light" mode="inline" defaultSelectedKeys={[path]} onClick={this.toggleClick}>
                <Menu.Item key="/home">
                    <Icon type="user"></Icon>
                    <span>我的统计</span>
                </Menu.Item>
                <Menu.Item key="/info">
                    <Icon type="desktop"></Icon>
                    <span>支出统计</span>
                </Menu.Item>
                <Menu.Item key="/message">
                    <Icon type="inbox"></Icon>
                    <span>Dashboard1</span>
                </Menu.Item>
            </Menu>
        )
    }
}
export default withRouter(menus)
// 左侧menu
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
export default class menus extends Component{
    constructor(props){
        super(props)
        console.log(this)
    }
    toggleClick = e =>{
        console.log( this.props)
    }
    render(){
        return (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['home']} onClick={this.toggleClick}>
                <Menu.Item key="home">
                    <Icon type="user"></Icon>
                    <span>我的统计</span>
                </Menu.Item>
                <Menu.Item key="info">
                    <Icon type="desktop"></Icon>
                    <span>支出统计</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox"></Icon>
                    <span>Dashboard1</span>
                </Menu.Item>
            </Menu>
        )
    }
}
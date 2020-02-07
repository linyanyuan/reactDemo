// 左侧menu
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
class menus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: props.location.pathname.split('/app')[1] ? props.location.pathname.split('/app')[1] : '/home'
        }
    }
    toggleClick = e => {
        this.props.history.push({
            pathname: `/app${e.key}`
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        let path = nextProps.location.pathname.split('/app')[1] ? nextProps.location.pathname.split('/app')[1] : '/home'
        this.setState({
            path: path
        })
    }
    render() {
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
                    <span>账单详情</span>
                </Menu.Item>
                <Menu.Item key="/account">
                    <Icon type="camera" />
                    <span>生活记录</span>
                </Menu.Item>
            </Menu>
        )
    }
}
export default withRouter(menus)
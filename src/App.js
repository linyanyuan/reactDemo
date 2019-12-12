//根组件
import React, {Component} from 'react';
import {Link, Route, Switch } from "react-router-dom";
import Menus from './components/menu/menu.js' // 引入menu菜单
import Header from './components/header/header.js' // 引入header组件
import Home from './components/Home' // Home组件
import Info from './components/Info/info' // Home组件
import {Layout, Avatar} from 'antd';
const {Sider, Content} = Layout;
import './style.css'
import pic from './image/pic.jpg'
class App extends Component{
    constructor(props){
        super(props)
    }
    
    state={
        collapsed: false
    }
    toggle = ()=>{
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render(){
        return (
            <Layout>
                <Sider collapsible trigger={null} theme="light" collapsed={this.state.collapsed}>
                    {!this.state.collapsed ? 
                    <div className="siderTitle">Cost Books</div>:<div className="siderTitle">B</div>}
                    <div className="userMes">
                        <Avatar size="large" src={pic} alt="头像"></Avatar>
                        {!this.state.collapsed?<div className="user_motto">海内存知己，天涯若比邻</div>:'' }
                    </div>
                    <Menus></Menus>
                </Sider>
                <Layout>
                    <Header collapsed={this.state.collapsed} toggle={this.toggle}></Header>
                    <div className="content_box">
                        <Switch>
                            <Route exact path={`${this.props.match.url}/`} component={Home} />
                            <Route  path={`${this.props.match.url}/home`} component={Home} />
                            <Route  path={`${this.props.match.url}/info`} component={Info} />                        
                        </Switch> 
                    </div>
                </Layout>
            </Layout>
        )
    }
}
export default App;
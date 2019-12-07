import React from 'react';
import { HashRouter, Route, Switch, BrowserRouter,Redirect,IndexRoute} from "react-router-dom";
import App from '../App' // 引入根组件
import Login from '../components/login/Login'
import Home from '../components/Home' // Home组件
// 生成路由表
const routes = ()=> (
    <HashRouter>
        <Switch>
            <Route exact  path="/login" component={Login}></Route>
            <Route exact  path="/home" component={Home}></Route>         
            {/* 重定向*/}
            <Redirect from="/" to="/login"></Redirect>
            <Redirect from='*' to='/404' />
        </Switch>
    </HashRouter>     
);
export default routes



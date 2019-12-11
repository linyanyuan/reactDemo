import React from 'react';
import { HashRouter, Route, Switch, BrowserRouter,Redirect} from "react-router-dom";
import App from '../App' // 引入根组件
import Login from '../components/login/Login'
// 生成路由表
const routes = ()=> (
    <HashRouter>
        <Switch>
            <Route exact  path="/login" component={Login}></Route>
            <Route path="/app" component={App}></Route>  
            {/* 重定向*/}
            <Redirect from="/" to="/login"></Redirect>
            <Redirect from='*' to='/404' />
        </Switch>
    </HashRouter>     
);
export default routes



import React from 'react'
import ReactDOM from 'react-dom'
import Router from './config/Route' // 引入路由表
// import zhCN from 'antd/es/locale/zh_CN';
// import 'antd/dist/antd.css'; // 引入antd.css
import './style.css'
ReactDOM.render(
    <Router></Router>,
    document.getElementById('app')
)

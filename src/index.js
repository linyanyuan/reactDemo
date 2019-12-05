import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
console.log('我是dev分支')
const ele = React.createElement('div',{className:'hello'},'士大夫萨芬')
ReactDOM.render(ele,document.getElementById("app"))
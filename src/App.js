//根组件
import React, {Component} from 'react';
import {Link } from "react-router-dom";
class App extends Component{
    render(){
        return (
            <div>
               <Link to='/home'>跳转到Home页面</Link>    
            </div>
        )
    }
}
export default App;
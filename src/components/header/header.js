import React,{Component} from 'react';
import {Icon, Input,Row,Col} from 'antd';
import './header.css';
const {Search} = Input;
export default class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='header_box'>
                <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}/>
                <div className="header_right">
                    <Row>
                        <Col span={10}>
                             <Search placeholder='Search' className="search_box" />
                        </Col>
                    </Row> 
                </div> 
               
            </div>
        )
    }
}
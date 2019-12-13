import React,{Component} from 'react';
import {Row, Col, Icon} from 'antd';
import BarChart from './charts_bar';
import CostList from './costList';
import './home.css';
class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Row className="home_content">
                <Col lg={16} style={{padding:'0 15px 0 0'}}>
                    <div className="cardCharts">
                        <div className="card_body">
                            <h5 className="card_title">支出统计</h5>
                            <BarChart></BarChart>
                        </div>
                    </div>
                </Col>
                <Col lg={8} style={{padding:'0 0 0 15px'}}>
                    <div className="cardCharts">
                        <div className="card_body">
                            <h5 className="card_title">支出列表</h5>
                            <CostList></CostList>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}
export default Home;
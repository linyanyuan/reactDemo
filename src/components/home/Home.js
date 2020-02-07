import React, { Component } from 'react';
import { Row, Col, Icon, Statistic} from 'antd';
import BarChart from './charts_bar';
import CostList from './costList'; // 支出排行
import Statistics from './statistics'; // 统计组件
import LineChart from './charts_line_year';
import './home.css';
import {Link } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props)
    }
    LickTo(e){
        this.props.history.push({
            pathname: '/app/info'
        })
    }
    render() {
        return (
            <div>
                <Row className="home_content">
                    <Col lg={12} >
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">月统计 
                                <Link to={'/app/info'} style={{float:'right',fontSize:12,fontWeight:'normal'}}>查看详情</Link></h5>
                                {<Statistics idPrefix='month'></Statistics>}
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} >
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">年统计
                                <Link to={'/app/info'} style={{float:'right',fontSize:12,fontWeight:'normal'}}>查看详情</Link></h5>
                                <Statistics idPrefix='year'></Statistics>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="home_content">
                    <Col lg={16}>
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">本月支出分析</h5>
                                <BarChart></BarChart>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} >
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">支出详情</h5>
                                <CostList></CostList>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Home;
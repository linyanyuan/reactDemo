import React, { Component } from 'react';
import { Row, Col, Icon, Statistic} from 'antd';
import BarChart from './charts_bar';
import CostList from './costList';
import PieChart from './charts_pie';
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
                    <Col lg={12} style={{ padding: '10px' }}>
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">月统计 
                                <Link to={'/app/info'} style={{float:'right',fontSize:12,fontWeight:'normal'}}>查看详情</Link></h5>
                                <Col lg={6} offset={1}>
                                    <div className="money_totle">
                                        <Statistic
                                            title="支出"
                                            value={8769}
                                            prefix={<Icon type="pay-circle" style={{color:'#ffb822'}}/>}
                                        />
                                        <Statistic
                                            style={{marginTop:20}}
                                            title="同比"
                                            value={1128}
                                            valueStyle={{ color: '#3f8600'}}
                                            prefix={<Icon type="arrow-up" />}
                                        />
                                    </div>
                                </Col>
                                <Col lg={16} offset={1}>
                                    <PieChart></PieChart>
                                </Col>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} style={{ padding: '10px' }}>
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">年统计
                                <a onClick={this.LickTo.bind(this)} style={{float:'right',fontSize:12,fontWeight:'normal'}}>查看详情</a></h5>
                                <LineChart></LineChart>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="home_content">
                    <Col lg={16} style={{ padding: '10px' }}>
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">本月支出分析</h5>
                                <BarChart></BarChart>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} style={{ padding: '10px' }}>
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
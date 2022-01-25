import React, { Component } from 'react';
import { Row, Col, Icon, Statistic} from 'antd';
// import BarChart from './charts_bar';
import CostList from './costList'; // 支出排行
import Statistics from './statistics'; // 统计组件
import LineChart from './charts_line_year';
import './home.css';
import {Link } from "react-router-dom";
import { getStatistics } from '../../api/getHomeData'; // 统计信息
class Home extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        chain: 0,
        totle: 0
    }
    LickTo(e){
        this.props.history.push({
            pathname: '/app/info'
        })
    }
    componentDidMount() {
        getStatistics().then(res => {
            if (res.code === '1') {
                let chartData = this.handleChartsData(res.data.thisMonthData);
                let lineData = this.handleLineData(res.data.thisMonthData);
                this.setState({
                    chain: res.data.chain,
                    totle: res.data.thisMonthTotal,
                    chartsData: chartData,
                    lineData:lineData
                })
            }
        })
    }
    // 处理折线图数据
    handleLineData = (params) => {
        let arr = params,newDate = [],lineData = [];
        arr = arr.sort((a,b) =>{
            return a.date < b.date?-1:1;
        })
        let obj = {};
        arr.map((item,index) =>{
            if(obj.hasOwnProperty(item.date)){
                obj[item.date] += Number(item.pay)
            }else{
                obj[item.date] = Number(item.pay);
            }
        })
        newDate = Object.keys(obj);
        lineData = Object.values(obj);
        return {newDate,lineData}
    }
    // 处理饼图数据
    handleChartsData = (params) => {
        let obj = {},arr = [];
        params.map(item =>{
            if(obj.hasOwnProperty(item.typeName)) {
                // 已经存在
                obj[item.typeName] += Number(item.pay);
            } else{
                obj[item.typeName] = Number(item.pay);
            }
        })
        for(let val in obj) {
            arr.push({
                value:obj[val],
                name:val
            })
        }
        return arr;
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
                                {<Statistics idPrefix='month' chain={this.state.chain}  totle={this.state.totle} chartsData={this.state.chartsData} ></Statistics>}
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} >
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">年统计
                                <Link to={'/app/info'} style={{float:'right',fontSize:12,fontWeight:'normal'}}>查看详情</Link></h5>
                                <Statistics idPrefix='year'  chain={this.state.chain}  totle={this.state.totle} chartsData={this.state.chartsData} ></Statistics>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="home_content">
                    <Col lg={16}>
                        <div className="cardCharts">
                            <div className="card_body">
                                <h5 className="card_title">本月支出分析</h5>
                                <LineChart lineData={this.state.lineData}></LineChart>
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
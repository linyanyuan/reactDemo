/* 月/年统计模块 */
import React, { Component } from 'react';
import PieCharts from './charts_pie'; // 饼图
import PropTypes from 'prop-types';
import { Col, Icon, Statistic } from 'antd';
import { getStatistics } from '../../api/getHomeData'; // 统计信息
class Statistics extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        chain: 0,
        totle: 0,
        chartsData: []
    }
    componentDidMount() {
        getStatistics().then(res => {
            if (res.code === '1') {
                let chartData = this.handleChartsData(res.data.thisMonthData);
                this.setState({
                    chain: res.data.chain,
                    totle: res.data.thisMonthTotal,
                    chartsData: chartData
                })
            }
        })
    }
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
                <Col lg={6} offset={1}>
                    <div className="money_totle">
                        <Statistic
                            title="支出"
                            value={this.state.totle}
                            prefix={<Icon type="pay-circle" style={{ color: '#ffb822' }} />}
                        />
                        <Statistic
                            style={{ marginTop: 20 }}
                            title="环比"
                            value={this.state.chain}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="arrow-up" />}
                        />
                    </div>
                </Col>
                <Col lg={16} offset={1}>
                    <PieCharts idPrefix={this.props.idPrefix} chartsData={this.state.chartsData} maxShow={6}/>
                </Col>
            </div>
        )
    }
}
Statistics.propTypes = {
    idPrefix: PropTypes.string.isRequired
};
export default Statistics;
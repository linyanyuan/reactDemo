/* 月/年统计模块 */
import React, { Component } from 'react';
import PieCharts from './charts_pie'; // 饼图
import PropTypes from 'prop-types';
import { Col, Icon, Statistic } from 'antd';
class Statistics extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        chartsData: PropTypes.array,
        chain:PropTypes.number,
        totle:PropTypes.number,
        idPrefix: PropTypes.string.isRequired
    }
    static defaultProps = {
        chain:0,
        totle:0,
        chartsData: []
    }
    render() {
        const { totle, chain, chartsData } = this.props;
        return (
            <div>
                <Col lg={6} offset={1}>
                    <div className="money_totle">
                        <Statistic
                            title="支出"
                            value={totle}
                            prefix={<Icon type="pay-circle" style={{ color: '#ffb822' }} />}
                        />
                        <Statistic
                            style={{ marginTop: 20 }}
                            title="环比"
                            value={chain}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="arrow-up" />}
                        />
                    </div>
                </Col>
                <Col lg={16} offset={1}>
                    <PieCharts idPrefix={this.props.idPrefix} chartsData={chartsData} maxShow={6} />
                </Col>
            </div>
        )
    }
}
export default Statistics;
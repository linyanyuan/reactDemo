/* 月/年统计模块 */
import React, { Component } from 'react';
import PieCharts from './charts_pie'; // 饼图
import PropTypes from 'prop-types';
import {Col, Icon, Statistic} from 'antd';
class Statistics extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Col lg={6} offset={1}>
                    <div className="money_totle">
                        <Statistic
                            title="支出"
                            value={8769}
                            prefix={<Icon type="pay-circle" style={{ color: '#ffb822' }} />}
                        />
                        <Statistic
                            style={{ marginTop: 20 }}
                            title="环比"
                            value={1128}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="arrow-up" />}
                        />
                    </div>
                </Col>
                <Col lg={16} offset={1}>
                    <PieCharts idPrefix={this.props.idPrefix} />
                </Col>
            </div>
        )
    }
}
Statistics.propTypes = {
    idPrefix: PropTypes.string.isRequired
};
export default Statistics;
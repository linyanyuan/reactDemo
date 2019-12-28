import React, { Component } from 'react';
import { Row, Col, DatePicker, ConfigProvider, Select, Card, Icon } from 'antd';
const { RangePicker } = DatePicker;
import './info.css';
import Table from '../common/tables';//引入tables组件
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_1577660_1ao4d5v6z3l.js'
})
class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: ['date', 'date'],
            value: [moment().startOf('month'), moment().endOf('month')],
            selectType: 'month'
        }
    }
    handlePanelChange = (value, mode) => {
        this.setState({
            value,
            mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
        });
    };

    handleChange = value => {
        console.log(value)
        this.setState({ value });
    };
    selectChange = value => {
        this.setState({
            selectType: value,
            value: [],
            mode: value === 'month' ? ['date', 'date'] : ['month', 'month']
        })
    }
    render() {
        const Style = {
            icon:{
                fontSize: '50px',
                width: '50px',
                height: '50px',
                lineHeight: '50px',
                marginRight: '20px',
                color:'#31a2ff'
            },
            h6:{
                fontSize:14
            },
            h4:{
                margin:0,                
                fontSize:20
            }
        }
        return (
            <Row className="info_box">
                <Col lg={24} style={{ padding: '10px 20px' }}>
                    <div className="cardCharts">
                        <div className="card_top">
                            <span className="card_title">你的支出</span>
                            <Select
                                value={this.state.selectType}
                                onChange={this.selectChange}
                                style={{ float: 'right', marginLeft: 20 }}>
                                <Select.Option value="month">月统计</Select.Option>
                                <Select.Option value="year">年统计</Select.Option>
                            </Select>
                            <ConfigProvider locale={zh_CN} >
                                <RangePicker
                                    ranges={{
                                        '本月': [moment().startOf('month'), moment().endOf('month')],
                                    }}
                                    placeholder={this.state.selectType === 'month' ? ['开始日期', '结束日期'] : ['开始月份', '结束月份']}
                                    format={this.state.selectType === 'month' ? "YYYY-MM-DD" : "YYYY-MM"}
                                    value={this.state.value}
                                    // defaultValue={[moment('2019/12/01','YYYY-MM-DD'),moment('2019/12/31','YYYY-MM-DD')]}
                                    mode={this.state.mode}
                                    onChange={this.handleChange}
                                    onPanelChange={this.handlePanelChange}
                                    style={{ float: 'right' }}></RangePicker>
                            </ConfigProvider >
                        </div>
                    </div>
                </Col>
                <Col lg={24} style={{ padding: '10px 20px' }} className="left_info">
                    <Col lg={7}>
                        <Card className="card_info" style={{margin:'30px 0'}}>
                            <IconFont type="iconyuetongji" style={Style.icon}/>
                            <div className="left_title">
                                <h6 style={Style.h6}>本月支出</h6>
                                <h4 style={Style.h4}>￥8921</h4>
                            </div>
                        </Card>
                        <Card className="card_info">
                            <IconFont type="iconniantongji" style={Style.icon}/>
                            <div className="left_title">
                                <h6 style={Style.h6}>全年支出</h6>
                                <h4 style={Style.h4}>￥92921</h4>
                            </div>
                        </Card>
                        
                    </Col>
                    <Col lg={16} offset={1} style={{paddingBottom:20}}>
                        <Table></Table>
                    </Col>
                </Col>
            </Row>
        )
    }
}
export default Info;
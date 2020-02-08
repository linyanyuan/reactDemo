import React, { Component } from 'react';
import {
    Row, Col, DatePicker, ConfigProvider,
    Select, Card, Icon, Button, Tooltip, Modal,
    Form, Input, message, Divider, Popconfirm
} from 'antd';
import { queryAccount, deleteAccount, updateAccount, getMonthDateReal} from '../../api/getHomeData'; // 获取接口

const { RangePicker } = DatePicker;
import './info.css';
import Table from '../common/tables';//引入tables组件
import costType from '../common/costType.json'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1577660_1ao4d5v6z3l.js'
})
class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: ['date', 'date'],
            value: [moment().startOf('month'), moment().endOf('month')],
            selectType: 'month',
            visible: false,
            edit: false, // 是否为修改
            typeArr: [],
            editTypeId:null, // 修改的ID
            loading: false,//table的loading
            dataSource: [] // 账单详情
        }
    }
    componentDidMount() {
        this.getMonthAccount();
    }
    handlePanelChange = (value, mode) => {
        this.setState({
            value,
            mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
        });
    };
    // 日期改变
    handleChange = value => {
        this.setState({ value });
    };
    // 月统计选择改变
    selectChange = value => {
        this.setState({
            selectType: value,
            value: [],
            mode: value === 'month' ? ['date', 'date'] : ['month', 'month']
        })
    };
    // 获取账单详情
    getMonthAccount = () => {
        this.setState({
            loading: true
        })
        let option = {
            startDate: moment().startOf('month').format('YYYY-MM-DD'),
            endDate: moment().endOf('month').format('YYYY-MM-DD')
        }
        getMonthDateReal(option).then(res => {
            this.setState({
                loading: false
            })
            if (res.code === '1') {
                this.setState({
                    dataSource: res.data
                })
            }
        })
    };
    // 显示记账modal
    showModel = () => {
        this.setState({
            visible: true,
            edit: false
        })
        // 初始化数据
        this.props.form.setFieldsValue({
            message: null,
            type: 'Catering',
            price: 1,
            date: moment()
        })
    };
    // 修改
    editModel = (params) => {
        this.setState({
            visible: true,
            edit: true,
            editTypeId:params.typeId
        })
        // 返显数据
        this.props.form.setFieldsValue({
            message: params.message,
            type: params.type,
            price: params.pay,
            date: moment(`${params.date} ${params.time}`)
        })
    };
    // 取消
    handleCancel = () => {
        this.setState({
            visible: false
        })
    };
    // 校验记账金额
    checkPrice = (rule, value, callback) => {
        if (value > 0) {
            return callback();
        }
        callback('金额必须大于0');
    };
    // 记账确认
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let typeName = '';
                costType.map(item => {
                    if (item.type === values.type) {
                        typeName = item.typeName;
                    }
                })
                let option = {
                    date: values.date.format('YYYY-MM-DD'),
                    time: values.date.format('HH:mm:ss'),
                    message: values.message,
                    pay: values.price,
                    type: values.type,
                    typeName: typeName
                }
                if (this.state.edit) {
                    // 修改
                    option.typeId = this.state.editTypeId;
                    updateAccount(option).then(res =>{
                        if (res.code === '1') {
                            message.success({
                                content: res.msg
                            })
                            this.setState({
                                visible: false
                            })
                            this.getMonthAccount();
                        }
                    })
                } else {
                    // 记账
                    queryAccount(option).then(res => {
                        if (res.code === '1') {
                            message.success({
                                content: res.msg
                            })
                            this.setState({
                                visible: false
                            })
                            this.getMonthAccount();
                        }
                    })
                }

            }
        });
    };
    // 删除一条信息
    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.typeId !== key.typeId)
        });
        let option = {
            typeId: key.typeId
        }
        deleteAccount(option).then(res => {
            if (res.code === '1') {
                message.success({
                    content: res.msg
                })
                // this.getMonthAccount();
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { TextArea } = Input;
        // 样式
        const Style = {
            icon: {
                fontSize: '50px',
                width: '50px',
                height: '50px',
                lineHeight: '50px',
                marginRight: '20px',
                color: '#31a2ff'
            },
            h6: {
                fontSize: 14
            },
            h4: {
                margin: 0,
                fontSize: 20
            }
        };
        // modal form表单
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        };
        // tables的 columns
        const columns = [
            {
                title: '日期',
                dataIndex: 'date',
                key: 'date'
            },
            {
                title: '时间',
                dataIndex: 'time',
                key: 'time'
            },
            {
                title: '类型',
                dataIndex: 'typeName',
                key: 'type'
            },
            {
                title: '支出',
                dataIndex: 'pay',
                key: 'cost'
            },
            {
                title: '备注',
                dataIndex: 'message',
                key: 'msg'
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(record)}>
                            <a>删除</a>
                        </Popconfirm>
                        <Divider type="vertical"></Divider>
                        <a onClick={() => this.editModel(record)}>修改</a>
                    </span>
                )
            }
        ];
        const listType = costType.map((item, index) =>
            <Select.Option value={item.type} key={item.type}>{item.typeName}</Select.Option>
        )
        return (
            <ConfigProvider locale={zh_CN} >
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
                                    style={{ float: 'right', marginLeft: 20 }}></RangePicker>
                                <Tooltip placement="top" title="记账">
                                    <Button
                                        onClick={this.showModel}
                                        style={{ float: 'right' }}
                                        icon="account-book">记账</Button>
                                </Tooltip>

                            </div>
                        </div>
                    </Col>
                    <Col lg={24} style={{ padding: '10px 20px' }} className="left_info">
                        <Col lg={7}>
                            <Card className="card_info" style={{ margin: '30px 0' }}>
                                <IconFont type="iconyuetongji" style={Style.icon} />
                                <div className="left_title">
                                    <h6 style={Style.h6}>本月支出</h6>
                                    <h4 style={Style.h4}>￥8921</h4>
                                </div>
                            </Card>
                            <Card className="card_info">
                                <IconFont type="iconniantongji" style={Style.icon} />
                                <div className="left_title">
                                    <h6 style={Style.h6}>全年支出</h6>
                                    <h4 style={Style.h4}>￥92921</h4>
                                </div>
                            </Card>

                        </Col>
                        <Col lg={16} offset={1} style={{ paddingBottom: 20 }}>
                            <Table
                                dataSource={this.state.dataSource}
                                columns={columns}
                                loading={this.state.loading}></Table>
                        </Col>
                    </Col>
                    <Modal
                        visible={this.state.visible}
                        title={this.state.edit ? "修改" : "记账"}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="cancel" type="primary" onClick={this.handleCancel}>取消</Button>,
                            <Button key="submit" type="primary" onClick={this.handleSubmit}>确定</Button>
                        ]}>

                        <Form {...formItemLayout } >
                            <Form.Item label="类型">
                                {getFieldDecorator('type', {
                                    initialValue: 'Catering'
                                })(
                                    <Select
                                        placeholder="请选择类型">
                                        {listType}
                                    </Select>
                                    )}
                            </Form.Item>
                            <Form.Item label="日期">
                                {getFieldDecorator('date', {
                                    initialValue: moment().locale('zh-cn'),
                                    rules: [
                                        { type: 'object', required: true, message: '请选择日期' }
                                    ]
                                })(<DatePicker showTime placeholder="请选择日期" />)}
                            </Form.Item>
                            <Form.Item label="金额">
                                {getFieldDecorator('price', {
                                    initialValue: 1,
                                    validateFirst: true,
                                    rules: [
                                        { required: true, message: '金额必填' },
                                        { validator: this.checkPrice, }]
                                })(<Input type="text"></Input>)}

                            </Form.Item>
                            <Form.Item label="备注">
                                {getFieldDecorator('message', {
                                })(<TextArea rows="4" ></TextArea>)}
                            </Form.Item>
                        </Form>
                    </Modal>
                </Row>
            </ConfigProvider >

        )
    }
};
Info = Form.create({})(Info)
export default Info;
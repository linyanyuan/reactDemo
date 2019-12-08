// 登录组件
import React,{Component} from 'react'
import {Row, Col, Icon, Form, Input,Button,Checkbox } from 'antd'
import './Login.css'
export default class Login extends Component {
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err,values) =>{
            if(!err){
                this.props.history.push({
                    pathname: '/home'
                })
            }
        })
    }
    constructor(props){
        super(props);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Row className="mainBox">
                <Col xs={0} sm={14} md={14} lg={14} xl={14} className="leftImage"></Col>
                <Col xs={24} sm={10} md={10} lg={10} xl={10}  className="rightContent">
                    <div className="contentBox">
                        <Icon type="meh" theme="twoTone" style={{ fontSize: '40px',margin:'8px'}} twoToneColor="rgb(220, 0, 78)"/>
                        <Col style={{fontSize:'1.5rem',fontWeight: '400',lineHeight: '1.33'}}>Sign in</Col>
                        <Col lg={16} xl={16} style={{marginTop: '40px'}}>
                            <Form className="login-form" onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('username',{
                                        rules:[{ required: true, message: 'Please input your username!' }]
                                    })(
                                        <Input 
                                        size="large"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} 
                                        placeholder="Username">
                                        </Input>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password',{
                                        rules:[{ required: true, message: 'Please input your Password!' }]
                                    })(
                                        <Input 
                                        size="large"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} 
                                        placeholder="Password">
                                        </Input>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>Remember me</Checkbox>)}
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        
                    </div>
                </Col>
            </Row>
        )
    }
}
Login = Form.create({})(Login)


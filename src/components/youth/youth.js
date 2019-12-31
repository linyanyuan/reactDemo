import React, { Component } from 'react';
import {Row,Col,Popover, Button,Carousel, Radio,Avatar,message,Icon,BackTop} from 'antd';
import TimeImg from './time_img';
import './youth.css';
import TimeMusic from './time_music';
const content = (
    <div>
        <p>从世文</p>
        <p>时间轴</p>
    </div>
)
class Youth extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    //组件将要挂载时候触发的生命周期函数
    componentWillMount(){
        const hide = message.loading('欢迎来到青春轴！',0);
        setTimeout(hide,1000);
    }
    state = {
      dotPosition:'top',
    };
    handlePositionChange = ({target:{value:dotPosition}})=>this.setState({dotPosition});
    // <link 跳转
    linkto(t){
        this.props.history.push('./info');
    }
    render() {
        const {dotPosition} = this.state;
        return(
            <div>
            <div style={{ maxHeight: 'calc(100vh - 175px)',overflowY:"auto" }} id ='handelDocID'>
                <BackTop className="ant-back-top-inner" visibilityHeight={100} target ={()=>document.getElementById('handelDocID')} >
                    <div>UP</div>
                </BackTop>
                <Row className="time_axis" type="flex" justify="space-around" align="middle">
                    <Col className="col-1" span={4}>
                        <Button className="btnto" type="link" onClick={this.linkto.bind(this)}><Icon type="left" />link</Button>
                        <Popover content={content} title="Title" trigger="hover">
                            <Avatar style={{marginRight:12}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <Button>时间轴：</Button>
                        </Popover>
                    </Col>
                    <Col span={8}>
                        <div>
                            <Radio.Group onChange={this.handlePositionChange} value={dotPosition} style={{marginBottom:8}}>
                                <Radio.Button value="top">Top</Radio.Button>
                                <Radio.Button value="bottom">Bottom</Radio.Button>
                                <Radio.Button value="left">Left</Radio.Button>
                                <Radio.Button value="right">Right</Radio.Button>
                            </Radio.Group>
                            <Carousel dotPosition={dotPosition} effect="fade">
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <TimeImg mod={'two'}></TimeImg>
                </Row>
                <Row>
                    <TimeMusic></TimeMusic>
                </Row>
            </div>
            </div>
        )
    }
}

export {Youth}
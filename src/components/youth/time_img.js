import React, { Component } from 'react';
import {Row,Col,Timeline,Icon,Divider} from 'antd';
import './time_img.css';
class TimeImg extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Row className="time_cont" type="flex">
                    <Col className="col-1" span={6}>
                        <Timeline pending="Recording..." mode="alternate">
                            <Timeline.Item color="green" dot={<Icon type="clock-circle-o" style={{fontSize:'16px'}}/>}>2002-07-20</Timeline.Item>
                            <Timeline.Item>2002-07-21</Timeline.Item>
                            <Timeline.Item>2002-07-22</Timeline.Item>
                            <Timeline.Item>2002-07-23</Timeline.Item>
                            <Timeline.Item>2002-07-24</Timeline.Item>
                        </Timeline>
                        <Divider dashed={true}/>
                    </Col>
                    <Col className="col-2" span={18}>
                        <Row style={{textAlign:'center'}} justify="center">
                            <Col span={24}>
                                <Timeline>
                                    <Timeline.Item>2002-07-20</Timeline.Item>
                                    <Timeline.Item>2002-07-21</Timeline.Item>
                                    <Timeline.Item>2002-07-22</Timeline.Item>
                                    <Timeline.Item>2002-07-23</Timeline.Item>
                                    <Timeline.Item>2002-07-24</Timeline.Item>
                                    <Timeline.Item>2002-07-25</Timeline.Item>
                                    <Timeline.Item>2002-07-26</Timeline.Item>
                                    <Timeline.Item>2002-07-27</Timeline.Item>
                                </Timeline>
                                <Divider orientation="right">我是轴线介绍</Divider>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default TimeImg;
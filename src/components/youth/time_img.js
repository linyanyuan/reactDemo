import React, { Component } from 'react';
import {Row,Col,Timeline,Icon,Divider,Card} from 'antd';
import './time_img.css';
const { Meta } = Card;
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
                            <Col span={6}>
                                <Card hoverable={true} style={{ maxWidth: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                                <Divider orientation="right">我是父组件数据mod-{this.props.mod}</Divider>
                            </Col>
                            <Col span={6}>
                                <Card hoverable={true} style={{ maxWidth: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                                <Divider orientation="right">我是轴线介绍</Divider>
                            </Col>
                            <Col span={6}>
                                <Card hoverable={true} style={{ maxWidth: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                                <Divider orientation="right">我是轴线介绍</Divider>
                            </Col>
                            <Col span={6}>
                            <Card hoverable={true} style={{ maxWidth: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
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
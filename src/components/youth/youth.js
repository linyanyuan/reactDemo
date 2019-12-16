import React, { Component } from 'react';
import {Row,Col,Popover, Button,Carousel, Radio} from 'antd';
import TimeImg from './time_img';
import './youth.css';
const content = (
    <div>
        <p>从世文</p>
        <p>时间轴</p>
    </div>
)
class Youth extends Component{
    constructor(props){
        super(props);
    }

    state = {
      dotPosition:'top',
    };
    handlePositionChange = ({target:{value:dotPosition}})=>this.setState({dotPosition});
    render() {
        const {dotPosition} = this.state;
        return(
            <div>
                <Row className="time_axis" type="flex" justify="space-around" align="middle">
                    <Col className="col-1" span={4}>
                        <Popover content={content} title="Title" trigger="hover">
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
                    <TimeImg></TimeImg>
                </Row>
            </div>
        )
    }
}

export {Youth}
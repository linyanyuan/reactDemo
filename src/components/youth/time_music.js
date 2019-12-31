import React, { Component } from 'react';
import {Row,Col} from 'antd';
import './time_music.css';
import TimeMusicItem from './time_music_item';
class TimeMusic extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            inpValue:''
        }
        //代码、性能优化，修改this指向
        this.inpchange = this.inpchange.bind(this);
        this.pushfun = this.pushfun.bind(this);
        this.delown = this.delown.bind(this);
    }
    // input的change事件
    inpchange(e){
        this.setState({
            inpValue:e.target.value
        })
    }
    // 添加按钮
    pushfun(){
        this.setState({
            list:[...this.state.list,this.state.inpValue],
            inpValue:''
        })
    }
    // 删除项目
    delItem(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    // 父组件通过属性的方式向子组件传递参数
    //子组件调用的方法
    delown(index){
        const listitem = [...this.state.list];
        listitem.splice(index,1);
        this.setState({
            list:listitem
        })
    }
    //优化子组件
    getItemDom(){
        return(
            this.state.list.map((item,index) => {
                return (
                 <TimeMusicItem key={index} index={index} content={item} delown={this.delown}/>
                 // return <li style={{'cursor':'pointer'}} key={index} onClick={this.delItem.bind(this,index)}>{item}</li>
                )
             })
        )
    }
    render(){
        return(
            <div>
                <Row className="music_cont" type="flex">
                    <Col span={14}>
                        <div>
                            <input value={this.state.inpValue} onChange={this.inpchange}/>
                            <button style={{'cursor':'pointer'}} onClick={this.pushfun}>add</button>
                        </div>
                        <div>
                            <ul>
                                {this.getItemDom()}
                            </ul>
                        </div>
                    </Col>
                    <Col span={10}></Col>
                </Row>
            </div>
        )
    }
}
export default TimeMusic;
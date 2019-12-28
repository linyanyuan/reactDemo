import React, {Component} from 'react';
import {List} from 'antd';
import { getMonthDateReal } from '../../api/getHomeData';
import moment from 'moment';
class CostList extends Component{
    constructor(props){
        super(props)
        let option ={
            startDate:moment().startOf('month').format('YYYY-MM-DD'),
            endDate: moment().endOf('month').format('YYYY-MM-DD')
        }
        this.state= {
            data:[]
        }
        getMonthDateReal(option).then(res =>{
            if(res.code === '1'){
                this.setState({
                    data:res.data
                })
            }
        })
       /*  this.state={
            data:[
                {
                    payNum:'33',
                    payRel:'扫二维码付款-给陕味基',
                    time:'12月11日 11:56',
                    title:'袁林岩'
                },
                {
                    payNum:'23',
                    payRel:'扫二维码付款-给陕味基',
                    time:'12月10日 11:56',
                    title:'袁林岩'
                },
                {
                    payNum:'40',
                    payRel:'扫二维码付款-给陕味基',
                    time:'12月10日 18:36',
                    title:'袁林岩'
                },
                {
                    payNum:'33',
                    payRel:'扫二维码付款-给陕味基',
                    time:'12月11日 11:56',
                    title:'袁林岩'
                },
                {
                    payNum:'33',
                    payRel:'扫二维码付款-给陕味基',
                    time:'12月11日 11:56',
                    title:'袁林岩'
                }
            ]
        } */
    }
    render(){
        return(
            <div className="costList_box">
                <List 
                    size="large"
                    dataSource={this.state.data}
                    renderItem={item=>(
                        <List.Item 
                            actions={[
                                <div>{item.pay}</div>
                            ]}>
                            <List.Item.Meta 
                            description={`${item.date} ${item.time}`}
                            title={<a>{item.message}</a>} />
                        </List.Item>
                    )}
                >
                </List>
            </div>
        )
    }
}
export default CostList;

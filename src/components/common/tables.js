import React, {Component} from 'react';
import {Table, Divider} from 'antd';
class Tables extends Component{
    constructor(props){
        super(props)
        this.state={
            pagination:props.pagination?props.pagination:false
        }
    }
    render(){
        const columns= [
            {
                title:'日期',
                dataIndex:'date',
                key:'date'
            },
            {
                title:'类型',
                dataIndex:'type',
                key:'type'
            },
            {
                title:'支出',
                dataIndex:'cost',
                key:'cost'
            },
            {
                title:'备注',
                dataIndex:'msg',
                key:'msg'
            },
            {
                title:'操作',
                dataIndex:'action',
                key:'action',
                render:(text,record)=>(
                    <span>
                        <a>删除</a>
                        <Divider type="vertical"></Divider>
                        <a>修改</a>
                    </span>
                )
            }
        ];
        const dataSource = [
            {
                key:'1',
                date:'2019-12-10',
                cost:'-43',
                type:'餐饮',
                msg:'中午陕味基吃饭花费'
            },
            {
                key:'2',
                date:'2019-12-11',
                cost:'-34',
                type:'餐饮',
                msg:'中午陕味基吃饭花费'
            },
            {
                key:'3',
                date:'2019-12-12',
                cost:'-22',
                type:'水果',
                msg:'中午陕味基吃饭花费'
            },
            {
                key:'4',
                date:'2019-12-13',
                cost:'-45',
                type:'水果',
                msg:'中午陕味基吃饭花费'
            },
            {
                key:'5',
                date:'2019-12-14',
                cost:'-34',
                type:'水果',
                msg:'中午陕味基吃饭花费'
            }
        ]
        return(
            <Table columns={columns} dataSource={dataSource} pagination={this.state.pagination}
            scroll={{ y: 250 }} ></Table>
        )
    }
}
export default Tables; 
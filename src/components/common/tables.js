import React, {Component} from 'react';
import {Table} from 'antd';
class Tables extends Component{
    constructor(props){
        super(props)
        this.state={
            pagination:props.pagination?props.pagination:false
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    render(){
       
        const dataSource = this.props.dataSource;
        // console.log(this.props.loading);
        // console.log(this.props.dataSource);
        // let loading = this.props.dataSource.length === 0? true : false;
        return(
            <Table columns={this.props.columns} dataSource={dataSource} pagination={this.state.pagination}
            loading={this.props.loading}
            rowKey={row=>row.type}
            scroll={{ y: 350 }} ></Table>
        )
    }
}
export default Tables; 
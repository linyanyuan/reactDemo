import React, {Component} from 'react';
import {Table} from 'antd';
class Tables extends Component{
    constructor(props){
        super(props)
        this.state={
            pagination:props.pagination?props.pagination:false
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }
    render(){
       
        const dataSource = this.props.dataSource;
        return(
            <Table columns={this.props.columns} 
            dataSource={dataSource} 
            pagination={this.state.pagination}
            loading={this.props.loading}
            rowKey={row=>row.typeId}
            scroll={{ y: 350 }} ></Table>
        )
    }
}
export default Tables; 
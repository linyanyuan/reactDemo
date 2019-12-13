import React, {Component} from 'react';
import {List} from 'antd';
class CostList extends Component{
    render(){
        const data = [
            'sadfasdfdasfasdf'
        ]
        return(
            <div className="bar_charts">
                <List dataSource={this.data}></List>
            </div>
        )
    }
}
export default CostList;

import React, {Component,Fragment} from 'react';
class TimeMusicItem extends Component{
    constructor(props){
        super(props);
        // 代码优化
        this.delet= this.delet.bind(this);
    }
    //子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
    delet(){
        const { delown,index } = this.props;
        delown(index);
        // this.props.delown(this.props.index);
    }

    render(){
        const { content,index } = this.props;
        return(
            <Fragment>
                <div style={{'cursor':'pointer'}} onClick={this.delet}>{index}-{content}</div>
            </Fragment>
        )
    }
}
export default TimeMusicItem;
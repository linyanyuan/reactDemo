import React,{Component} from 'react';
import { ConfigProvider  , Calendar  } from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
class Info extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ConfigProvider  locale={zh_CN}>
                 <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                 <Calendar fullscreen={false}  />
             </div>
            </ConfigProvider >
        )
    }
}
export default Info;
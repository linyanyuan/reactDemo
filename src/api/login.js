import * as api from './api.js'; //引入接口地址
import {getData} from './getData.js'; // 引入请求函数

export const login = (param) => {
    return getData({param,...{type:'get',url:api.login}})
} 
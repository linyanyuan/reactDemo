import * as api from './api.js'; //引入接口地址
import {getData, postData} from './getData.js'; // 引入请求函数

// 获取本月支出详细
export const getMonthDateReal = (param) => {
    return getData({param,...{type:'get',url:api.getMonthDateReal}})
} 
// 记账
export const queryAccount = (param) => {
    return postData({param,...{url:api.queryAccount}})
}
// 删除一条记录
export const deleteAccount = (param) => {
    return getData({param,...{type:'get',url:api.deleteAccount}})
} 
// 修改
export const updateAccount = (param) => {
    return getData({param,...{type:'get',url:api.updateAccount}})
} 
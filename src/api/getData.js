import axios from 'axios';
import {message} from 'antd';
axios.defaults.timeout = 20000;
// request拦截器
axios.interceptors.request.use(config =>{
    return config
}, error =>{
    return Promise.reject(error);
})
// response拦截器
axios.interceptors.response.use(res =>{
    if(res.status !== 200) {
        // message.error({
        //     content: res.msg,
        //     duration: 3000
        // })
    }else{
        return res;
    }
},error =>{
    
    console.log(error)
    alert(error)
    return Promise.reject(error);
})
export const getData = ({url,type,param} = {}) =>{
    return new Promise((resolve,reject) =>{
        axios.get(url,{
            params:param
        }).then(res =>{
            resolve(res.data)
        }).catch(err =>{
            reject(err)
        })
    })
}
export const postData = ({url,type,param} = {}) =>{
    return new Promise((resolve,reject) =>{
        console.log(url,param);
        axios.post(url,param).then(res =>{
            resolve(res.data)
        }).catch(err =>{
            reject(err)
        })
    }) 
}
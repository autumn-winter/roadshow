import axios from 'axios'
import { Toast } from 'vant';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    withCredentials: true,
    timeout: 3000
})

service.interceptors.request.use(config=>{
  Toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
  return config
},err=>{
  return Promise.reject(error)
})

service.interceptors.response.use(response=>{
  Toast.clear()
  
  const res = response.data
  if (res.status && res.status !== 200) {
    if (res.status === 401) {
      Toast.loading({
          message: '登录超时，请重新登录',
          forbidClick: true,
        });
    }
    return Promise.reject(res || 'error')
  } else {
    return res.data
  }
},err=>{
    return Promise.reject(err)
})
    
export default service
  

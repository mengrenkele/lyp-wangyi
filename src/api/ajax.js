import axios from 'axios'
import qs from 'qs'

//生成ajax实例
const instance  = axios.create({
    baseURL: '/api',
})

//请求拦截器
instance.interceptors.request.use(config => {
    //将config的请求参数json格式 转换成url-ending格式
    config.data = qs.stringify(config.data)

    return config
})

//响应拦截器
instance.interceptors.response.use(
    //响应成功,返回数据
    response => {
        return response.data
    },

    //响应失败,返回错误信息
    error => {
        console.log(error.message)
    }
)

export default instance
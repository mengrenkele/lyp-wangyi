import ajax from './ajax'

//获取首页数据的请求
export const getHomeDatas = () => ajax({
    url:`/home`
})

//获取分类页面数据的请求
export const getSortDatas = () => ajax({
    url:'/sort'
})
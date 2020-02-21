import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({//$store中有dispatch方法，来进行事件分发==》dispatch(actionName, data)；vuex支持模块化管理==modules
    state,  //放数据的仓库
    getters,  //定义计算属性的方法的对象，相当于computed===》
    actions,  //间接修改state中数据的回调的对象==》能够处理异步数据，比如发送ajax请求==》是通过执行commit（）来调用mutations的回调的
    mutations  //直接修改state中数据的回调的对象==》只处理同步数据
})

export default store
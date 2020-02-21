import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'//引入第三方库lib-flexible来做适配
// import { Popup } from 'mint-ui';

import router from './router'
import * as API from './api'

Vue.config.productionTip = false

// Vue.component(Popup.name, Popup)
//将API绑定给Vue原型对象
Vue.prototype.$API = API

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

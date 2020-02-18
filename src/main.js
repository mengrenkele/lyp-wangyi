import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'//引入第三方库lib-flexible来做适配


import router from './router'
import * as API from './api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  API
}).$mount('#app')

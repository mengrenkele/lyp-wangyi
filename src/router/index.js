import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router ({
    routes,
    mode:'history' //去除根路径的#
})

export default router
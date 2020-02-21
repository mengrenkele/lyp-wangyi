import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import WorthBuy from '../pages/WorthBuy/WorthBuy.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

export default[
    {
        path:'/home',
        component: Home
    },
    {
        path:'/sort',
        component: Sort
    },
    {
        path:'/worthbuy',
        component: WorthBuy
    },
    {
        path:'/cart',
        component: Cart
    },
    {
        path:'/personal',
        component: Personal
    },
    {
        path:'/search',
        component: Search
    },
    {
        path:'/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/home'
    },
]
// import Home from '../pages/Home/Home.vue'
const Home = () => import('../pages/Home/Home.vue')
// import Sort from '../pages/Sort/Sort.vue'
const Sort = () => import('../pages/Sort/Sort.vue')
// import WorthBuy from '../pages/WorthBuy/WorthBuy.vue'
const WorthBuy = () => import('../pages/WorthBuy/WorthBuy.vue')
// import Cart from '../pages/Cart/Cart.vue'
const Cart = () => import('../pages/Cart/Cart.vue')
// import Personal from '../pages/Personal/Personal.vue'
const Personal = () => import('../pages/Personal/Personal.vue')
// import Search from '../pages/Search/Search.vue'
const Search = () => import('../pages/Search/Search.vue')
// import Login from '../pages/Login/Login.vue'
const Login = () => import('../pages/Login/Login.vue')
// import NewUser from '../pages/NewUser/NewUser.vue'
const NewUser = () => import('../pages/NewUser/NewUser.vue')

// import Sort11 from '../pages/Sort/Sort11/Sort11.vue'
const Sort11 = () => import('../pages/Sort/Sort11/Sort11.vue')
const Sort12 = () => import('../pages/Sort/Sort12/Sort12.vue')


export default[
    {
        path:'/home',
        component: Home
    },
    {
        path:'/sort',
        component: Sort,
        // children: [
        //     {
        //         path:'/sort/11',
        //         // path:'/sort/：id',
        //         component: Sort11
        //     },
        //     {
        //         path:'/sort/12',
        //         // path:'/sort/:id',
        //         component: Sort12
        //     },
        //     // {
        //     //     path:'/sort',
        //     //     redirect: '11'
        //     // },
        // ]
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
        path:'/newuser',
        component: NewUser
    },
    {
        path: '/',
        redirect: '/home'
    },
]
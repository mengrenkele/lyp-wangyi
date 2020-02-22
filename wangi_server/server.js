/* eslint-disable no-unused-vars */
let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

//home页面数据
let homeData = require('./datas/index.json');
let sortGoods  = require('./datas/indexCateModule.json')

//sort页面数据
let leftDatas = require('./datas/cateNavDatas.json')
let rightDatas = require('./datas/cateLists.json')

//home组件页面路由
// router.get('/home', (ctx, next) => {
//   ctx.body = {
//     code: 0,
//     data: homeData
//   }
// });

//请求/home页面时的路由
router.get('/home', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: [homeData, sortGoods]
  }
});

//请求/sort页面路由
router.get('/sort', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: [leftDatas, rightDatas]
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})

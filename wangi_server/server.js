/* eslint-disable no-unused-vars */
let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let homeData = require('./datas/index.json');
let sortGoods  = require('./datas/indexCateModule.json')
//home组件页面路由
// router.get('/home', (ctx, next) => {
//   ctx.body = {
//     code: 0,
//     data: homeData
//   }
// });

router.get('/home', (ctx, next) => {
  ctx.body = {
    code: 0,
    data: [homeData, sortGoods]
  }
});


app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})

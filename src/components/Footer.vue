<template>
  <div class="footer">
    <div class="homeNavigation" :class="{active: $route.path === '/home'}" @click="goPath('/home')">
      <i class="icon-home"></i>
      <span>首页</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/sort'}" @click="goPath('/sort')">
      <i class="icon-sort1"></i>
      <span>分类</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/worthbuy'}" @click="goPath('/worthbuy')">
      <i class="icon-buy"></i>
      <span>值得买</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/cart'}" @click="goPath('/cart')">
      <i class="icon-cart2"></i>
      <span>购物车</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/personal'}" @click="goPath('/personal')">
      <i class="icon-Personal"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goPath (path) {//path是接受路由的形参
      if (this.$route.path !== path) {//当前路由跟要跳转的路由不同时,才有必要进行跳转
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .active
    color #DD1A21
  .footer
    display flex
    justify-content space-around
    width 100%
    height 49px
    position absolute
    left 0
    bottom 0
    background #fff
    .homeNavigation
      display inline-block
      position relative
      text-align center
      box-sizing border-box 
      text-align center
      i 
        display block
        height 20px
        width 20px
        margin-bottom 2px
      span 
        font-size 14px
       



      
</style>

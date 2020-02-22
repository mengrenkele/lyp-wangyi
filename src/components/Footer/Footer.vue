<template>
  <div class="footer">
    <div class="homeNavigation" :class="{active: $route.path === '/home'}" @click="goPath('/home')">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/sort'}" @click="goPath('/sort')">
      <i class="iconfont icon-sort1"></i>
      <span>分类</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/worthbuy'}" @click="goPath('/worthbuy')">
      <i class="iconfont icon-buy"></i>
      <span>值得买</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/cart'}" @click="goPath('/cart')">
      <i class="iconfont icon-cart2"></i>
      <span>购物车</span>
    </div>
    <div class="homeNavigation" :class="{active: $route.path === '/personal'}" @click="goPath('/personal')">
      <i class="iconfont icon-Personal"></i>
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
  @import '../../common/stylus/mixins.styl'
  .active
    color #DD1A21
  .footer
    top-border-1px(#eee)
    display flex
    position fixed
    width 100%
    height 50px
    left 0
    bottom 0
    box-sizing border-box
    background #fff
    .homeNavigation
      font-size 14px
      display flex
      flex-direction column
      width 20%
      height 49px
      text-align center
      line-height 15px
      i 
        font-size 20px
        line-height 25px
        
       



      
</style>

<template>
  <div id="homeContainer">
      <!-- 头部导航 -->
      <div class="nav">
          <!-- 导航上部 -->
          <div class="navTop">
              <a class="logo" href="http://localhost:8080/">
                <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
              </a>
              <div class="topSearch" @click="seachComd">
                  <i class="iconfont icon-seachx"></i>
                  <span class="placeholder">搜索商品,共20421件商品</span>
              </div>
              <div class="loginBtn">登录</div>
          </div>
          <!-- 导航下部 -->
          <div class="navBtm">
              <div class="navCategories">
                      <div class="navCategoriesItem" :class="{active: $route.path==='/home'}">
                        <span>推荐</span>
                      </div>
                      <div class="navCategoriesItem" :class="{active: $route.path==='/home'}">
                        <span>推荐</span>
                      </div>
                      <div class="navCategoriesItem" :class="{active: $route.path==='/home'}">
                        <span>推荐</span>
                      </div>
                      <div class="navCategoriesItem" :class="{active: $route.path==='/home'}">
                        <span>推荐</span>
                      </div>
              </div>
              <div class="iconOpen">
                  <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp" alt="">
              </div>
          </div>
      </div>
      <!-- 轮播图部分 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://www.swiper.com.cn/templets/default/images/home/ipad.png" alt="">
            </div>
        </div>
       </div>
      <div class="servicePolicy"></div>
      <div class="reactCommodity"></div>
      <div class="newUserGuide"></div>
      <i class="goToTop"></i>
      <div class="ftExplain"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #homeContainer
    width 100%
    height 1000px
    //顶部导航
    .nav
      width 100%
      height 74px
      position absolute
      top 0
      left 0
      display flex
      flex-direction column
      //导航上部
      .navTop
        width 100%
        height 44px
        box-sizing border-box
        padding 8px 15px
        display flex
        justify-content round
        font-size 14px
        .logo
          img 
            width 69px
            height 20px
            margin-top 4px
        .topSearch
          width 221px
          height 28px
          margin 0 10px
          text-align center
          line-height 28px 
          display flex
          justify-content center
          background #ededed
          color #666
          border-size 10px
          .iconfont
            //未找到图标与文字水平中线对齐的样式,vertical-align无效,是垂直对齐方式
            margin-right 5px
          .placeholder
            //网易官网的字体样式
            font-family PingFangSC-Light,helvetica,'Heiti SC'
        .loginBtn
          white-space normal //规定文本不换行
          text-align center
          border 1px solid #DD1A21 
          border-radius 5px
          width 37px
          height 20px
          line-height 20px
          font-size 12px  
          color #DD1A21 
          margin-top 4px
      .navBtm
        width 100%
        height 30px
        line-height 30px
        text-align center
        position relative
        .navCategories
          display flex
          .navCategoriesItem
             display inline-block
             width 44px
             &.active
               border-bottom 1px solid #DD1A21
        .iconOpen
          position absolute
          right 0
          bottom 0
          width 50px
          box-sizing border-box
          img
            // margin-top 7px //这里给img设置margin和padding失效,和夫级的绝对定位
            width 15px
            height 15px
    .swiper-container
      margin-top 74px
      width 100%
      height 185px
      img
        width 100%
        height 185px



</style>

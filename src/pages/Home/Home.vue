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
       <!-- 服务政策 -->
      <div class="servicePolicy">
          <ul class="servicePolicy-ul">
              <li class="servicePolicyItem">
                 <i class="iconfont icon-wordpress"></i> 
                 <span>网易自营品牌</span>
              </li>
              <li class="servicePolicyItem">
                  <i class="iconfont icon-shield1"></i> 
                 <span>30天无忧退货</span>
              </li>
              <li class="servicePolicyItem">
                  <i class="iconfont icon-money"></i> 
                 <span>48小时快速退款</span>
              </li>
          </ul>
      </div>
      <div class="commodityCont">
          <!-- 商品分类列表 -->
        <div class="listCommodity">
            <ul class="listCommodity-ul">
                <li class="listCommodityI">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <p>新品首发</p>
                </li>
            </ul>
        </div>
        <!-- 主题商品导航 -->
        <div class="themeCommodity">
            <div class="themeCommodityT">
                    <img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
            </div>
            <div class="themeCommodityM">
                    <img src="" alt="">
            </div>
            <div class="themeCommodityB">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
            </div>
        </div>
        <!-- 新人专享 -->
        <div class="newUser">
            <h2 class="title">新人专享</h2>
            <div class="content">
                <a class="ctLeft" href="">
                    <span>新人专享红包</span>
                </a>
                <a class="ctRightTop" href="">
                    <p>福利社</p>   
                    <p>今日特价</p>                 
                </a>
                <a class="ctRightBottom" href="">
                    <p>新人拼团</p>   
                    <p>1元起包邮</p> 
                </a>
            </div>
        </div>
        <!-- 类目热销榜 -->
        <div class="hotList">
            <h2>类目热销榜</h2>
            <div class="hotListPages">
                <!-- 大类目榜 -->
                <ul class="bigList">
                    <li class="host">
                            <img src="" alt="">
                            <span>热销榜</span>
                    </li>
                    <li class="praise">
                            <img src="" alt="">
                            <span>好评榜</span>
                    </li>
                </ul>
                <!-- 主题分类榜 -->
                <ul class="sortList">
                    <li class="sortThemeList"></li>
                </ul>
            </div>
        </div>
        <!-- 限时购 -->
        <div class="timeLimit">
            <div class="timeLimitTitle">
                <div class="countDown">
                    <h3>限时购</h3>
                    <span>02:11:11</span>
                </div>
                <div class="more">
                    <span>更多</span>
                    <i class="iconfont"></i>
                </div>
             </div>
             <ul>
                 <li>
                     <img src="" alt="">
                     <span>￥19.99</span>
                 </li>
             </ul>

        </div>
        <!-- 新品首发 -->
        <div class="newProducts">
            <div class="newProductsTitle">
                <h3>新品首发</h3>
                <span>更多</span>
                <i></i>
            </div>
            <ul class="details">
                <li class="detailsItem">
                        <img src="" alt="">
                        <p></p>
                        <span></span>
                        <div></div>
                </li>
            </ul>
        </div>
        <!-- 其它 -->
        <div class="other">
            <ul class="other-ul">
                <li class="otherItem">
                    <h3>断货补单王</h3>
                    <p>紧急补仓疯抢中</p>
                    <img src="" alt="">
                    <img src="" alt="">
                </li>
            </ul>
        </div>
      </div>
      <!-- 新用户注册导航 -->
      <div class="newUserGuide">
          <i class="iconfont"></i>
      </div>
      <!-- 回到顶部 -->
      <div class="goToTop">
          <i class="iconfont"></i>
      </div>
      <!-- 底部说明 -->
      <div class="ftExplain">
          <div>
              <button>下载APP</button>
              <button>电脑版</button>
          </div>
          <p>
              <span>网易公司版权所有 @ 1997-2020</span>
              <br>
              <span>食品经营许可证: JY13301080117119</span>
          </p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  #homeContainer
    width 100%
    height 1000px
    //顶部导航
    .nav
      display flex
      flex-direction column
      width 100%
      height 74px
      position fixed
      top 0
      left 0
      background-color #fff
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
    // 轮播图
    .swiper-container
      margin-top 74px
      width 100%
      height 185px
      img
        width 100%
        height 185px
    // 服务政策
    .servicePolicy
      background-color #fff
      .servicePolicy-ul
        display flex
        width 100%
        height 36px
        padding 9px 15px
        box-sizing border-box
        // line-height 36px
        // text-align center
        .servicePolicyItem
          width 33.3%
          height 18px
          .iconfont
            color #DD1A21
            margin-right 2px
          span 
            color #333
    //商品分类列表
    .listCommodity 
      width 100%
      height 186.5px
      .listCommodity-ul
        width 100%
        height 170px
        margin-bottom 10px
        display flex
        .listCommodityI
          width 20%
          height 78px
          text-align center
          font-size 12px
          margin-top 5px
          img 
            width 55px
            height 55px
            margin-bottom 5px
    //主题商品导航
    .themeCommodity
      width 100%
      height 424px
</style>

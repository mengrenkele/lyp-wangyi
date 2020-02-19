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
      <!-- 商品模块 -->
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
            <div class="themeCommoditB">
                <div class="themeCommoditB-one">
                    <img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
                </div>
                <div class="themeCommodityB-more">
                        <img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                        <img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                        <img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                        <img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                </div>
            </div>
        </div>
        <!-- 新人专享 -->
        <div class="newUser">
            <div class="title">
                <span class="before"></span>
                <h2 class="text">新人专享礼</h2>
                <span class="after"></span>
            </div>
            <div class="content">
                <div class="contentL">
                    <div class="contentL-text">新人专享红包</div>
                    <div class="contentL-img">
                        <img src="https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                    </div>
                    <i class=""></i>
                </div>
                    <div class="contentR">
                        <div class="contentR-T">
                            <p>福利社</p>   
                            <img src="https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                            <p>今日特价</p> 
                        </div>                
                        <div class="contentR-B">
                            <p>新人拼团</p>   
                            <div>1元起包邮</div> 
                        </div>
                    </div>
                    
            </div>
        </div>
        <!-- 类目热销榜 -->
        <div class="hotList">
            <div class="hotList-title">类目热销榜</div>
            <div class="hotListPages">
                <!-- 大类目榜 -->
                <ul class="bigList">
                    <li class="host">
                            <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                            <span>热销榜</span>
                    </li>
                    <li class="praise">
                            <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                            <span>好评榜</span>
                    </li>
                </ul>
                <!-- 主题分类榜 -->
                <ul class="sortList">
                    <li class="sortThemeList">
                        <div>酒水榜</div>
                        <img src="https://yanxuan-item.nosdn.127.net/3bd7a2e27f9ced5f72d9ce4c069c7326.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <!-- 限时购 -->
        <div class="timeLimit">
            <div class="timeLimitTitle">
                <div class="countDown">
                    <span>限时购</span>
                    <span>02:11:11</span>
                </div>
                <div class="more">
                    <span>更多</span>
                    <i class="iconfont icon-icon_left_arrow"></i>
                </div>
             </div>
            <ul class="timeLimitCon">
                <li class="timeLimitItem">
                    <img src="https://yanxuan-item.nosdn.127.net/103e416266d7cbeaaf08dac08a2332e1.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                    <div class="price">
                        <span class="newP">￥19.99</span>
                        <span class="oldP">￥199.99</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 新品首发 -->
        <div class="newProducts">
            <div class="newProductsTitle">
                <div class="newProducts-text">新品首发</div>
                <div class="more">
                    <span>更多</span>
                    <i class="iconfont icon-icon_left_arrow"></i>
                </div>
            </div>
            <ul class="details">
                <li class="detailsItem">
                    <img src="https://yanxuan-item.nosdn.127.net/d691b12d383ea93c2108a383e2b1d3cc.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                    <div class="introduce-text">杏杏杏杏杏杏杏杏周星星惺惺相惜该行星惺惺</div>
                    <p>￥29.99</p>
                    <div class="remark">
                        <span>特价</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 其它 -->
        <div class="other">
            <ul class="other-ul">
                <li class="otherItem">
                        <h3>断货补单王</h3>
                        <p>紧急补仓疯抢中</p>
                        <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
                        <img src="https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
                </li>
            </ul>
        </div>
      </div>
      <!-- 新用户注册导航 -->
      <div class="newUserGuide">
          <i class="iconfont icon-Gift-Box2"></i>
      </div>
      <!-- 回到顶部 -->
      <div class="goToTop">
          <i class="iconfont icon-leftarrow-copy"></i>
      </div>
      <!-- 底部说明 -->
      <div class="ftExplain">
          <div class="download">
              <div class="phone">下载APP</div>
              <div class="pc">电脑版</div>
          </div>
          <div class="explain">
              <span>网易公司版权所有 @ 1997-2020</span>
              <br>
              <span>食品经营许可证: JY13301080117119</span>
          </div>
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
    font-family PingFangSC-Regular
    background-color #eee
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
      z-index 99
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
      background-color #1674e3
      box-sizing border-box
      .themeCommodityT
        img 
          width 100%
          height 120px
          margin-bottom 8px
      .themeCommoditB
        width 100%   
        height 304px
        padding 10px
        box-sizing border-box
        .themeCommoditB-one
          img 
            width 100%
            height 80px
        .themeCommodityB-more
          width 100%
          height 190px
          //   display flex
          img
            box-sizing border-box
            height 93px
            width 175.5px
            &:nth-child(2n-1)
              margin 4px 4px 0 0
            &:nth-child(2n)
              margin-top 4px     
    //新人专享
    .newUser
      width 100%
      height 279px
      background-color #fff
      margin 10px 0
      padding 0 15px
      box-sizing border-box
      .title
        color #333
        font-size 18px
        font-family PingFangSC-Regular
        height 45px
        text-align center
        line-height 45px
        position relative
        span,h2 
          display inline-block 
          margin auto
        .before,.after
          height 1.5px
          width 15px 
          background-color #000
          position absolute
          top 22.5px
        .before
          left 100px
        .after
          right 100px   
        // .text
        //   font-size 19px
      
      .content //内容区
        height 217px
        width 345px
        background-color #F9E9CF
        display flex
        .contentL //内容左侧
          height 100%
          width 171.5px
          border-right 2px solid #fff
          .contentL-text
            height 39px
            width 100%
            font-size 16px
            padding 15px 0 0 15px
            box-sizing border-box
          .contentL-img
            width 128.5px
            height 129px
            position relative
            margin 23px auto
            img
              width 128.5px
              height 129px
        .contentR //内容右侧
          height 100%
          width 171.5px
          display flex
          flex-direction column
          .contentR-T,.contentR-B
            padding 10px 0 0 15px
            box-sizing border-box
            height 107.5px
            width 100%
          .contentR-T
            p:first-child
              font-size 16px
              color #333
            p:last-child
              font-size 12px
              color #7F7F7F
            border-bottom 2px solid #fff 
            position relative
            img
              width 100px
              height 100px
              position absolute
              right 0
              bottom 0
          .contentR-B
            p:first-child
              font-size 16px
              color #333
            >div
              margin-top 3px
              height 16px
              width 60px
              background-color #CBB693
              color #fff
              border-raduis 10px
              text-align center
              line-height 16px
    //类目热销榜
    .hotList
        // 标题
      .hotList-title
        width 375px
        height 50px
        line-height 50px
        background-color #fff
        padding 0 30px
        font-size 16px
        color #333
        box-sizing border-box
        //热榜页
      .hotListPages
        width 375px
        height 310px
        padding 0 20px 20px 30px
        box-sizing border-box
        //大的热榜模块
        .bigList
          display flex
          >li
            width 170px
            height 100px
            background-color #F9F3E4
            margin 0 5px 5px 0
            box-sizing border-box
            position relative
            img
              width 100px
              height 100px
              position absolute
              right 0
              top 0
            span
              font-size 14px
              display inline-block
              margin 33px 0 0 12px
              box-sizing border-box
              position relative
              &:before
                content ''
                display block
                height 2px
                width 24px
                background-color #333
                position absolute
                left 0 
                top 24px
          li:last-child
            background-color #EBEFF6
        //主题榜
        .sortList
          display flex
          text-align center
          .sortThemeList
            width 84.5px
            height 90px
            background-color #F5F5F5
            margin 0 5px 5px 0
            box-sizing border-box
            div
              font-size 12px
              margin 5px 0
              box-sizing border-box
            img
              width 60px
              height 60px
    //限时购
    .timeLimit
      .timeLimitTitle
        height 50px
        width 375px
        background-color #fff
        padding 0 15px
        box-sizing border-box
        display flex
        justify-content space-between
        // 限时购-标题
        .countDown
          height 50px
          width 145px
          //   text-align center
          line-height 50px
          font-size 16px
        .more
          width 42px
          height 50px
          //   display flex
          //   justify-content flex-end
          line-height 50px
          span,.iconfont
            font-size 14px
      //内容
      .timeLimitCon
        width 375px
        height 300px
        display flex
        padding 0 5px 0 15px
        box-sizing border-box
        .timeLimitItem
          width 108px
          height 150px
          margin-right 10px
          padding-bottom 15px
          box-sizing border-box
          img
            width 108px 
            height 108px
            background-color #F5F5F5
          .price
            // width 108px
            // height 21px
            margin-top 5px
            padding-left 10px
            // line-height 21px
            .newP
              font-size 14px
              color #DD1A21
              margin-right 3px
            .oldP
              font-size 12px
              color #7F7F7F
              text-decoration line-through
    //新品首发
    .newProducts
      //标题
      .newProductsTitle
        height 50px
        width 375px
        background-color #fff
        padding 0 15px
        box-sizing border-box
        display flex
        justify-content space-between
        .newProducts-text
          height 50px
          width 145px
          line-height 50px
          font-size 16px
        .more
          width 42px
          height 50px
          line-height 50px
          span,.iconfont
            font-size 14px
      //内容
      .details
        width 375px
        height 398px
        display flex
        padding-left 15px
        box-sizing border-box
        .detailsItem
          width 108px
          height 199px
          background-color #fff
          margin-right 10px
          padding-bottom 6.5px
          box-sizing border-box
          img 
            width 108px
            height 108px
            background-color #f5f5f5
            margin-bottom 4px
          .introduce-text
            font-size 12px
            line-height 18px
            height 33px
            word-break break-all //允许在单词内换行
            text-overflow ellipsis //溢出隐藏部分使用特殊字符代替
            overflow hidden
            margin-bottom 2px
          p
            dispaly block
            font-size 16px
            color #DD1A21
          .remark
            height 15px
            margin-top 7px
            span
              //   display block
              padding 2px 2px
              border 1px solid #DD1A21 
              border-radius 8px
              font-size 12px  
              color #DD1A21
              background rgba(255,255,255,.7)  
    //其他 
    .other
      .other-ul
        width 375px
        height 288px
        margin 0 0 20px
        padding 5px 15px 13px
        background-color #fff
        .otherItem
          width 171px
          height 132px
          background-color #f5f5f5
          margin 2px 0 0 2px
          padding 10px 0 0 10px
          box-sizing border-box
          h3
            font-size 16px
          p
            font-size 12px
            color #7f7f7f 
          img
            width 75px
            height 75px
            margin-right 2px  
    // 新用户注册导航   
    .newUserGuide
      width 50px
      height 40px
      background-color #fff
      border-radius 20px 0 0 20px
      position fixed
      right 0
      bottom  140px
      z-index 10
      text-align center
      line-height 40px
      .iconfont 
        margin-left 5px
        color #DD1A21
        font-size 25px
    //返回顶部
    .goToTop
       width 41px
       height 41px 
       position fixed
       right 0
       bottom  70px
       z-index 10
       border-radius 50%
       background-color #fff
       text-align center
       line-height 40px
       .iconfont
         font-size 20px 
    //底部声明     
    .ftExplain
      background-color #414141
      width 375px
      height 122px
      margin-bottom 50px
      padding 27px 10px 14px
      box-sizing border-box
      .download
        width 355px
        height 31px
        margin-bottom 13px
        display flex
        justify-content center
        text-align center
        div
          background-color #414141
          border 0.5px solid #fff
          height 31px
          width 86px
          color #fff
          font-size 12px
          line-height 29px
        .phone
          margin-right 25px
      .explain
        width 355px
        height 32px
        text-align center         
        span
          color #999
          line-height 18px
</style>

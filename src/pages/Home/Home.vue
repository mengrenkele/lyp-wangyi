/* eslint-disable vue/no-duplicate-attributes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
<template>
  <div id="homeContainer">
      <!-- 头部导航 -->
      <div class="nav">
          <!-- 导航上部 -->
          <div class="navTop">
              <a class="logo" href="http://localhost:8080/">
                <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
              </a>
              <div class="topSearch" @click="$router.push('/search')">
                  <i class="iconfont icon-seachx"></i>
                  <span class="placeholder">搜索商品,共20421件商品</span>
              </div>
              <div class="loginBtn" @click="$router.push('/login')">登录</div>
          </div>
          <!-- 导航下部 -->
          <div class="navBtm">
              <div class="sortContainer" >
                  <ul class="navCategories">
                          <li class="navCategoriesItem" :class="{active: $route.path==='/home'}"
                          @click="$router.push('/')"
                          >
                            <span>推荐</span>
                          </li>
                          <li  v-for="(sortData,index) in goodsSort" :key="index"
                          class="navCategoriesItem" :class="{active: isIndex===index}"
                          @click="goCorTitem(sortData.id)"
                          >
                            <span>{{sortData.name}}</span>
                          </li>
                  </ul>
              </div>
              <div class="iconOpen" @click="changeIsShow">
                <!-- :class='["classify",isShow===true ? "rotateC" : "rotateA"]'  类名的三点运算符表达式，vue2.0就有 -->
                  <img :class='["classify",isShow===true ? "rotateC" : "rotateA"]'
                  src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp" alt="">
              </div>
              <div class="sort-mask" v-show="isShow">
                <div class="mask-title">
                  <span>全部频道</span>
                </div>
                <ul class="mask-sortUl">
                  <li class="mask-sortItem" @click="$router.push('/search')" :class="{active: $route.path==='/home'}">
                    <span>推荐</span>
                  </li>
                  <li class="mask-sortItem" v-for="(sortData,index) in goodsSort" :key="index"
                  @click="goCorTitem(sortData.id)" :class="{active: isIndex===index}"
                  >
                    <span>{{sortData.name}}</span>
                  </li>
                </ul>
                <div class="mask-back"></div>
              </div>
        </div>
      </div>
      <!-- 轮播图部分 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(pic, index) in homeDatas.focusList" :key="index">
                <img :src="pic.picUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
       </div>
     <!-- 服务政策 -->
      <div class="servicePolicy">
          <ul class="servicePolicy-ul">
              <li class="servicePolicyItem" v-for="(item, index) in homeDatas.policyDescList" :key="index">
                 <img class="iconfont" :src="item.icon" alt="">
                 <span>{{item.desc}}</span>
              </li>
          </ul>
      </div>
      <!-- 商品模块 -->
      <div class="commodityCont">
          <!-- 商品分类列表 -->
        <div class="listCommodity" v-if="homeDatas">
            <ul class="listCommodity-ul" v-if="homeDatas.kingKongModule">
                <li class="listCommodityI" v-for="(item, index) in homeDatas.kingKongModule.kingKongList" :key="index"
                @click="goCorTitem(item)"
                >
                    <img :src="item.picUrl" alt="">
                    <p>{{item.text}}</p>
                </li>
            </ul>
        </div>
        <!-- 主题商品导航 -->
        <div class="themeCommodity">
          <a href="https://act.you.163.com/act/pub/rb10rnjzwE30.html">
            <div class="themeCommodityT">
                    <img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png" alt="">
            </div>
            <!-- 这里小图片的轮播原理猜想：所有的小图片信息在一个数组中，先通过遍历获取到每一个元素信息，
            再根据轮播到的图片的index去配对数组元素的下标获取对应的图片路径，再将路径赋给img的src -->
            <img class="smallPic" src="https://yanxuan-item.nosdn.127.net/e272316176963bd54052126a7657bbb9.png" alt="">
          </a>
            <div class="themeCommoditB">
                <div class="themeCommoditB-one">
                  <a href="https://act.you.163.com/pub/L62FoIBG4A.html">
                    <img src="https://yanxuan.nosdn.127.net/be539f8235a88cd06a43227aeaf4df02.gif" alt="">
                  </a>
                </div>
                <div class="themeCommodityB-more">
                  <a href="https://act.you.163.com/act/pub/HW3LkZ184cR5.html">
                      <img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png" alt="">
                  </a>
                  <a href="https://you.163.com/topic/v1/pub/p2tDbYocHKd2.html">
                      <img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png" alt="">
                  </a>
                  <a href="https://act.you.163.com/act/pub/KR5ebCKbCQtR.html">
                      <img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png" alt="">
                  </a>
                  <a href="https://you.163.com/topic/v1/pub/NOvLN2wFt7PX.html">
                      <img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png" alt="">
                  </a>
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
            <div class="hotListPages" v-if="homeDatas">
                <!-- 大类目榜 -->
                <ul class="bigList" v-if="homeDatas.categoryHotSellModule">
                    <li class="host" v-for="(hostItem, index) in homeDatas.categoryHotSellModule.categoryList" :key="index">
                        <div>{{hostItem.categoryName}}</div>
                        <img :src="hostItem.showPicUrl" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <!-- 限时购 -->
        <div class="timeLimit" v-if="homeDatas">
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
            <ul class="timeLimitCon" v-if="homeDatas.flashSaleModule">
                <li class="timeLimitItem" v-for="(flashItem, index) in homeDatas.flashSaleModule.itemList" :key="index">
                    <img :src="flashItem.showPicUrl" alt="">
                    <div class="price">
                        <span class="newP">￥{{flashItem.activityPrice}}</span>
                        <span class="oldP">￥{{flashItem.originPrice}}</span>
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
                <li class="detailsItem" v-for="(newItem, index) in newGoods" :key="index">
                    <img :src="newItem.listPicUrl" alt="">
                    <div class="introduce-text">{{newItem.name}}</div>
                    <p>￥{{newItem.retailPrice}}</p>
                    <span v-if="newItem.itemTagList.length>1">{{newItem.itemTagList[1].name}}</span>
                </li>
            </ul>
        </div>
        <!-- 其它 -->
        <div class="other">
            <ul class="other-ul" v-if="homeDatas">
                <li class="otherItem" v-for="(sceneItem, index) in otherdatas" :key="index">
                    <h3>{{sceneItem.styleItem.title}}</h3>
                    <p>{{sceneItem.styleItem.desc}}</p>
                    <div v-for="(urlitem,index) in sceneItem.styleItem.picUrlList" :key="index">
                      <img :src="urlitem" alt="">
                    </div>
                </li>
            </ul>
        </div>
      </div>
      <!-- 新用户注册导航 -->
      <div class="newUserGuide">
          <i class="iconfont icon-Gift-Box2" @click="$router.push('/newuser')"></i>
      </div>
      <!-- 回到顶部 -->
      <div class="goToTop" v-if="isShowToTop" @click="toTop">
          <i class="iconfont icon-leftarrow-copy"></i>
      </div>
      <!-- 底部声明 -->
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
  import Bscroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
//   import {
//     SAVE_OTHERDATAS
// } from '../../store/state_type'

  export default {
    data () {
      return {
        homeDatas: [], //首页总数据
        goodsSort:[],  //商品分类的信息
        isIndex: null,  //获取对应的下标，来实现高亮显示
        isShow: false,  //小箭头是否旋转和遮罩层是否显示的标识，默认false
        newGoods: [],   //新品首发数据
        otherdatas:[],  //断货补单王数据
        isShowToTop: false  //是否显示回顶部的按钮的标识
      }
    },

    async mounted () {
      //页面加载，发送请求，获取数据
      let result = await this.$API.getHomeDatas()
      console.log(result)
      //将数据存到状态中
      this.homeDatas = result.data[0]
      this.goodsSort = result.data[1]
      
      //获取新品首发数据
      this.getNewGoods(this.homeDatas)
      //获取断货补单王数据
      this.getOtherdatas(this.homeDatas)
      // if(this.homeDatas){
      //   // let otherdatas = this.homeDatas.sceneLightShoppingGuideModule
      //   this.$store.dispatch(SAVE_OTHERDATAS,this.homeDatas.sceneLightShoppingGuideModule)
      // }

      //给window绑定监听
      window.addEventListener('scroll', this.getViewTop)
      
      this.$nextTick(()=>{
        new Bscroll('.sortContainer',{
          // 创建BScroll实例
          scrollX: true, //开启横向滑动
          click: true, //允许点击
          probeType: 2,
          momentum: true
        })
        //创建Swiper实例
        new Swiper('.swiper-container',{
          pagination: {
            el: '.swiper-pagination', //是否需要分页器
          },
          loop: true, //是否循环
        })
      })
    },
    methods: {
      //点击分类导航，进入各分类详情页的方法
      goCorTitem(id){
        window.location.href = `https://m.you.163.com/item/list?categoryId=${id}`
        //获取此链接在goodsSort中对应的下标
        let index = this.getIndex(id)
        this.isIndex = index
      },
      //点击导航小箭头事件
      changeIsShow(){
        this.isShow = !this.isShow
      },
      //获取新品首发数据
      getNewGoods (homeDatas) {
        if(homeDatas.newItemList) {
          let newGoods = homeDatas.newItemList.splice(2,7)
          this.newGoods = newGoods
          console.log(newGoods)
        }
      },
      //获取断货补单王数据
      getOtherdatas(homeDatas){
        if(homeDatas) {
          this.otherdatas = homeDatas.sceneLightShoppingGuideModule
        }
      },

      //获取 页面顶端到视口顶端的距离和获取视口高度,改变回顶部的按钮的标识
      getViewTop(){ //需要实时监视
        let pageViewTop = document.documentElement.scrollTop || document.body.scrollTop
        let viewHeight = window.innerHeight
        if(pageViewTop >= viewHeight){
          this.isShowToTop = true
        }else{
          this.isShowToTop = false
        }
      },
      //点击回到顶部的方法
      toTop(){
        //获取 页面顶端到视口顶端的距离
        // let page-viewTop = document.documentElement.scrollTop || document.body.scrollTop
        // //获取视口高度
        // let viewHeight = window.innerHeight
        // //当  页面顶端到视口顶端的距离 大于等于 视口高度时， 显示回顶按钮
        // this.isShowToTop = true
        //使组件 页面顶端到视口顶端的距离 等于 0px
        document.documentElement.scrollTop = 0
      }
    },
    computed: {
      // eslint-disable-next-line no-unused-vars
      getIndex(id) {//传入id
        return this.goodsSort.findIndex((item,id) => {//使用findIndex()获取下标
          return item.id === id
        })
      }
    },
    //在组件卸载时移除window监听
    destroyed(){
      window.removeEventListener('scroll', this.getViewTop); 
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .active
    border-bottom 2px solid #DD1A21
  .rotateC
    transform rotate(180deg)
    transition all .4s linear 0s
  .rotateA
    transform rotate(-0deg)
    transition all .4s linear 0s
  #homeContainer
    width 100%
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
      box-sizing border-box
      //导航上部
      .navTop
        width 100%
        height 44px
        box-sizing border-box
        padding 8px 15px
        display flex
        justify-content round
        font-size 14px
        box-sizing border-box
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
          width 33px
          height 20px
          line-height 20px
          font-size 12px  
          color #DD1A21 
          margin-top 4px
      .navBtm
        width 100%
        height 30px
        line-height 30px
        position relative
        .sortContainer
          overflow hidden
          width 325px
          height 30px
          .navCategories
            // width 790px  如果不设置宽度，会继承父级的宽；如果设置了宽度，又做不到使宽度靠内容撑开
            // white-space normal
            width 750px
            height 28px
            display flex
            .navCategoriesItem
              margin-left 12px
              padding 0 8px
              font-size 14px
              font-weight normal
        //小箭头
        .iconOpen
          text-align center
          position absolute
          right 0
          bottom 0
          width 50px
          z-index 5
          // box-sizing border-box
          img
            // margin-top 7px //这里给img设置margin和padding失效,还有父级的绝对定位
            width 15px
            height 15px
        //遮罩层
        .sort-mask
          position absolute
          left 0
          top 0
          width 375px
          // height 186px 
          z-index 3
          .mask-title
            width 100%
            height 30px
            padding  0 15px
            line-height 30px
            font-size 14px
            background-color #fff
          .mask-sortUl
            width 100%
            height 156px
            padding-top 12px
            // display flex
            // white-space pre-wrap
            background-color #fff
            .mask-sortItem
              display inline-block
              width 75px
              height 28px
              text-align center
              line-height 28px
              background-color #fafafa
              font-size 12px
              margin 0 0 20px 15px
              border 1px solid #ccc
              box-sizing border-box
          .mask-back
            width 100%
            height 375px
            background rgba(0,0,0,0.5)
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
          line-height 18px
          .iconfont
            width 16px
            height 16px
            color #DD1A21
            // font-size:0;
            vertical-align:top; //虽然实现了效果，但是并不知道为什么？  ：vertical-align规定元素垂直对齐的方式；vertical-align:top表示元素的顶端与行中最高元素的顶端对齐（这里是说横向对齐的方式吗）
            // line-height:0;
            margin-right 2px
            margin-top 2px
          span 
            // display inline-block
            color #333
    //商品分类列表
    .listCommodity 
      width 100%
      height 186.5px
      background-color #fff
      .listCommodity-ul
        width 100%
        height 170px
        margin-bottom 10px
        // display flex
        .listCommodityI
          display inline-block
          width 20%
          height 78px
          text-align center
          font-size 12px
          margin-top 5px
          box-sizing border-box
          img 
            width 55px
            height 55px
            margin-bottom 5px
            box-sizing border-box
    //主题商品导航
    .themeCommodity
      width 100%
      height 424px
      background-color #1674e3
      margin-bottom 10px
      box-sizing border-box
      >a
        position relative
        .smallPic
          height 84px
          width 84px
          position absolute
          left 38px 
          top 20px
        .themeCommodityT
          // a
          //   display inline
          //   box-sizing border-box 
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
          // a
          //   display inline 
          //   box-sizing border-box
          img 
            width 100%
            height 80px
        .themeCommodityB-more
          width 100%
          height 190px
          //   display flex
          a
            display inline-block
            // box-sizing border-box
            width 175.5px
            height 93px
            &:nth-child(2n-1)
              margin 4px 4px 0 0
            &:nth-child(2n)
              margin-top 4px     
            img
              // box-sizing border-box
              height 100%
              width 100%
    //新人专享
    .newUser
      width 100%
      height 279px
      background-color #fff
      margin-bottom 10px
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
      margin-bottom 10px
      background-color #fff
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
        background-color #fff
        box-sizing border-box
        //大的热榜模块
        .bigList
          .host
            display inline-block
            width 75px
            height 90px
            background-color #F5F5F5
            text-align center
            margin 0 5px 5px 0
            box-sizing border-box
            div
              font-size 12px
              margin 5px 0
              box-sizing border-box
            img
              width 60px
              height 60px
          li:nth-child(1),li:nth-child(2)
            width 155px
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
            div
              font-size 14px
              display inline-block
              margin-top 33px
              margin-left -50%
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
          li:nth-child(2)
            background-color #EBEFF6
        //主题榜
    //限时购
    .timeLimit
      margin-bottom 10px
      background-color #fff
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
        // display flex
        padding 0 5px 0 15px
        box-sizing border-box
        .timeLimitItem
          display inline-block
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
      margin-bottom 10px
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
        // display flex
        padding-left 15px
        box-sizing border-box
        background-color #fff
        .detailsItem
          display inline-block
          width 108px
          // height 199px
          background-color #fff
          margin-right 10px
          padding-bottom 6.5px
          box-sizing border-box
          vertical-align top //vertical-align元素垂直排列方式属性，值为top表示元素顶端于行中最高元素的顶端对齐----变为横向排列方式
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
          span
            height 15px
            margin-top 7px
            display inline-block
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
        padding 5px 15px 10px
        background-color #fff
        box-sizing border-box
        .otherItem
          display inline-block
          width 170px
          height 132px
          background-color #f5f5f5
          margin 2px 0 0 2px
          padding 10px 0 0 10px
          box-sizing border-box
          h3
            font-size 16px
          p
            line-height 30px
            font-size 12px
            color #7f7f7f
          div
            // margin-top 5px 
            display inline-block 
            box-sizing border-box
            img
              width 70px
              height 75px
              margin-right 2px 
              box-sizing border-box 
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

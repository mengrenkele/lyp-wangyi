<template>
  <div id="sortPage">
      <!-- 顶部搜索区域 -->
      <div class="searchM">
        <div class="searchWrp">
          <i class="iconfont icon-seachx"></i>
          <!-- onfocus="this.blur();" 禁止输入框获取焦点；onfocuse是聚焦，blur是去除聚焦 ；
          disabled="disabled"禁止获取焦点，失去点击事件，字体颜色变灰-->
          <input type="text" placeholder="搜索商品,共20421件商品" onfocus="this.blur();" @click="$router.push('/search')">
        </div>
      </div>
      <!-- 商品分类 -->
      <div class="sortWrp">
          <!-- 右侧分类导航 -->
          <ul class="sortNav">
            <!-- <li class="sortNavItem" v-for="(leftItem,index) in leftNav" :key="index"
            >  这是路由组件跳转，router-link  和  router-view
              <router-link :to="/sort/+leftItem.id">{{leftItem.name}}</router-link>
            </li> -->
            <!-- <li class="sortNavItem" v-for="(leftItem,index) in leftNav" :key="index"
            @click="componentId='Sort'+leftItem.id" 字符串命名
            >
              {{leftItem.name}}
            </li> -->
            <li class="sortNavItem" v-for="(leftItem,index) in leftNav" :key="index" :class="{sortActive: indexLight===index}"
            @click="setIndexLight(index);componentId=`Sort${leftItem.id}`"
            >
              {{leftItem.name}}
            </li>
            <!-- <li @click="componentId='Sort11'" class="sortNavItem">动态组件11</li>
            <li @click="componentId='Sort12'" class="sortNavItem">动态组件12</li> -->
          </ul>
          <!-- 左侧子路由区域 -->
          <!-- <router-view></router-view> -->
          <!-- 这里用动态组件 -->
          <component :is="componentId" :rightNav="rightNav"></component>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
const Sort11 = () => import('./Sort11/Sort11.vue')
const Sort12 = () => import('./Sort12/Sort12.vue')
  // import Sort11 from './Sort11/Sort11'
  // import Sort12 from './Sort12/Sort12'
  import Sort13 from './Sort13/Sort13'
  // import `Sort${id}` from './Sort12/Sort12'  //行不通
  import Sort1005000 from './Sort1005000/Sort1005000'
  import Sort1005002 from './Sort1005002/Sort1005002'
  import Sort1010000 from './Sort1010000/Sort1010000'
  import Sort1011000 from './Sort1011000/Sort1011000'
  import Sort1013001 from './Sort1013001/Sort1013001'
  import Sort1019000 from './Sort1019000/Sort1019000'
  import Sort1043000 from './Sort1043000/Sort1043000'
  import Sort109217021 from './Sort109217021/Sort109217021'
  import Sort109243029 from './Sort109243029/Sort109243029'

  export default {
    data () {
      return {
        leftNav:[], //分类页面左侧的数据
        rightNav:[], //分类页面右侧的数据
        indexLight: 0, //根据对应的下标是否高亮显示
        componentId: '',
      }
    },
    async mounted () {
      //发送请求
      let result = await this.$API.getSortDatas()
      if (result) {
        this.leftNav = result.data[0].categoryL1List
        this.rightNav = result.data[1]
      }
      console.log(this.leftNav)
      console.log(this.rightNav)
    },
    components:{
      Sort11,
      Sort12,
      Sort13,
      Sort1005000,
      Sort1005002,
      Sort1010000,
      Sort1011000,
      Sort1013001,
      Sort1019000,
      Sort1043000,
      Sort109217021,
      Sort109243029,
    },
    methods: {
      // // 调用getIndexLight设置indexLight的值
      //通过id获取indexLight对应的值
      // setIndexLight(id) {
      //   // console.log(id)
      //   // let index = this.leftNav.findIndex((item,id) => {
      //   //   console.log(item.id)
      //   //   return item.id === id
      //   // })
      //   // console.log(index)
      //   this.indexLight = this.getIndexLight(id)
      // }
      setIndexLight(index){
        this.indexLight = index
      }
    },
    computed: {
      // getIndexLight(id) {
      //   this.indexLight = this.leftNav.findIndex((item,id) => {
      //     console.log("getIndexLight函数执行了")
      //     return item.id === id
      //   })
      // },
       
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  // //高亮显示的类名
  .sortActive
    border-left 2px solid #DD1A21
    color #DD1A21 !important
  // 分类页面
  #sortPage
    background-color #fff
    width 100%
    //搜索模块
    .searchM
      width 100%
      height 44px
      border-bottom 1px solid #eee
      position fixed
      left 0
      top 0
      z-index 99
      //搜索区域包裹器
      .searchWrp
        width 100%
        height 100%
        text-align center
        line-height 44px
        position relative
        //输入框
        input
          width 345px
          height 28px
          background-color #ededed
          border-radius 3px
          &::-webkit-input-placeholder  //设置placeholder的样式
            font-size 14px
            text-align center
        //小图标    
        .iconfont
          position absolute
          left 90px 
          top 1px
          font-size 18px
    //商品分类区域
    .sortWrp
      width 100%
      display flex
      margin-top 45px
      .sortNav
        height 571px
        width 79px
        border-right 1px solid #eee
        padding 20px 0
        // margin-left -8px
        box-sizing border-box
        .sortNavItem
          width 100%
          height 25px
          text-align center
          line-height 25px
          margin-top 20px
          font-size 14px
          &:nth-child(1)
            margin-top 0
          a
            display block
            position relative
            text-decoration: none;
            color: #333;
            // nav-link比link多一个class="active"的类名,而且是点击哪个nav-link哪个就有
            &.router-link-active
              color #ab2b2b
              // 底部导航条,使用伪类实现,html在解析时不会解析伪类,这样在渲染页面时 少渲染一次标签
              &:after
                content ''
                background #ab2b2b
                height 100%
                width 3px
                position absolute
                // transform scaleY(0.5)
                bottom 0px
                left 0px
                // margin-left -20px
</style>

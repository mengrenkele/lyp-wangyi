<template>
  <div id="Sort11">
      <!-- 标题图片 -->
      <img class="bigPic" src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png" alt="">
      <!-- 子页面详情 -->
      <ul class="contentWrp">
        <li class="contentItem" v-for="(item,index) in datas" :key="index">
          <img :src="item.bannerUrl" alt="">
          <div>{{item.name}}</div>
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data (){
      return {
        datas: [], //接受来的数据
      }
    },
    props: {
      rightNav:Array,
    },
    mounted () {
      this.datas = this.$props.rightNav[0].categoryList
      console.log(this.datas)
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #Sort11
    width 294px
    padding 15px 15px
    box-sizing border-box
    .bigPic
      width 264px
      height 96px
      margin-bottom 32px
    .contentWrp
      width 264px
      .contentItem
        width 72px
        height 108px
        display inline-block
        vertical-align top
        margin-right 16px
        img 
          width 72px
          height 72px
        div
          height 36px
          width 72px
          color #333333
          font-size 12px
          text-overflow ellipsis 
          text-align center
          line-height 18px
</style>

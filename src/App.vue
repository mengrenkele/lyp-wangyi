<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from './components/Footer'//引入底部组件
  export default {
    components:{//注册组件
      Footer
      },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #app
    width 100%
    height 100%
 
</style>


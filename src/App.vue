<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.path !== '/personal'"></Footer>
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

</style>


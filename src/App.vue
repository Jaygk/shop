<template>
  <div>
    <!--对应内容区域-->
    <router-view></router-view>

    <!--底部导航区域-->
    <FooterGuide v-show="$route.meta.showGuide"></FooterGuide>
  </div>
</template>

<script>
// 导入公共导航组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    FooterGuide
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="navbar_wrapper">
    <!-- <router-link class="nav_item iconfont icon-shouyeshouye"  to="/index" /> -->
    <router-link class="nav_item iconfont icon-iconfonthome0" to="/index" />
    <router-link class="nav_item iconfont icon-caidan" style="font-size:0.36rem;" to="/activeCode" />
    <router-link class="nav_item iconfont icon-ai-user" to="/my" />
    <!-- <router-link class="nav_item iconfont icon-yonghu" to="/my" /> -->
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.navbar_wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  text-align: center;
  .nav_item {
    flex: 1 1 50%;
    font-size: 0.26rem;
    color: #409eff;;
  }
}
</style>

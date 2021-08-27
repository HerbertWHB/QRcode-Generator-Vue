<template>
  <header class="app-header">
      <div class="user fl">
        <slot name="user" class="icon"></slot>
      </div>
      <h1 class="title" v-text="title"></h1>
      <div class="scan fr">
        <slot name="scan"></slot>
      </div>
    </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      default: '艺术二维码'
    }
  }
}
</script>

<style lang="scss" scoped>
// 头部
.app-header {
  display: flex;
  width: 100%;
  line-height: 0.44rem;
  text-align: center;
  background: linear-gradient(#6dafdc,rgb(51,149,222));;
  color: #ffffff;
  .user {
    flex: 0.3;
  }
  .title {
    flex: 1;
    font-size: 0.18rem;
  }
  .scan {
    flex: 0.3;
  }
}
</style>

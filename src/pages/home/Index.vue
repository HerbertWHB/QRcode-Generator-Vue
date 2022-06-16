<template>
  <div class="page-view page-index">
    <!-- 滚动区域 -->
    <scroll ref="scroll" class="scroll scroll-bottom">
      <div class="index-wrapper">
        <h2 class="title">Artistic QRCode</h2>
        <!-- 选项菜单 -->
        <div v-for="(item,index) in ServiceItem" :key="index" class="service-item" @click="toSub(item.url)">
          <i class="iconfont" :class="item.icon"></i>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </scroll>
    <navbar/>
    <!-- 子页面渲染位置 -->
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// 引入组件
export default {
  name: 'Index',
  data () {
    return {
      iconfont: 'icon-tupian',
      ServiceItem: [
        {id: 1, name: '文本', icon: 'icon-wenbenshuru', url: 'text'},
        {id: 2, name: '网址', icon: 'icon-hulianwangie', url: 'website'},
        {id: 3, name: '文件', icon: 'icon-wenjian', url: 'file'},
        {id: 4, name: '图片', icon: 'icon-tupian', url: 'image'},
        {id: 5, name: '名片', icon: 'icon-mingpian', url: 'card'},
        {id: 6, name: '微信', icon: 'icon-weixin', url: 'wechat'}
      ]
    }
  },
  methods: {
    // 跳转子菜单
    toSub (url) {
      this.$router.push({
        name: url
      })
    },
    // 跳转到用户信息
    goUserInfo () {
      this.$router.push({
        name: 'my'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'kongying';
  src: url('../../assets/fonts/kongyin.ttf');
  font-weight: normal;
  font-style: normal;
}
.page-index {
  background: #7fcde4;
  .index-wrapper {
    position: relative;
    width: 100%;
    padding: 1.25rem 0.4rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .title {
      position: absolute;
      top: 0.5rem;
      text-align: center;
      font-size: 0.35rem;
      font-family: kongying;
      color: #386aab;
    }
    .service-item {
      flex: 0 1 1.2rem;
      height: 1.2rem;
      margin: 0.1rem;
      padding-top: 0.3rem;
      border-radius: 0.12rem;
      background: linear-gradient(rgb(51,149,222), #7bcaff);
      box-shadow: 0.05rem 0.05rem 0.2rem #30568a;
      text-align: center;
      &:active {
        background: #30568a;
        transform: scale(150%);
        box-shadow: 0.05rem 0.05rem 0.2rem #4881cf;
      }
      .iconfont {
        color: #ffffff;
        font-size: 0.45rem;

      }
      .name {
        font-size: 0.16rem;
        color: #ffffff;
      }
    }
  }
  .slide-enter-active,.slide-leave-active {
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to {
    transform: translateX(100%);
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  text-align: center;
}
</style>

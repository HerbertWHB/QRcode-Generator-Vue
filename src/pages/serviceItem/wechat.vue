<template>
  <div class="page-wechat sub-page">
    <z-header title='微信'>
      <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="FORMER_PAGE()"></span>
    </z-header>
    <!-- 滚动区域 -->
    <scroll ref='wrapper' class="scroll scroll-top">
      <div class="scroll_content">
        <el-form ref="wechat" class="wechat_wrapper">
          <el-form-item>
            <el-input placeholder="请输入微信公众号账号" v-model="message"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="MAKE_CODE()" type="primary">生成二维码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </scroll>
  </div>
</template>

<script>
export default {
  name: 'wechat',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    FORMER_PAGE () {
      this.$router.go(-1)
    },
    MAKE_CODE () {
      if (this.message.length === 0) {
        this.$toast('请输入微信公众号')
      } else {
        this.$router.push({
          name: 'beautifier',
          params: {
            data: this.message
          }
        })
      }
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.scroll_content {
  padding: 0.3rem 0.3rem 0;
  text-align: center;
}
</style>

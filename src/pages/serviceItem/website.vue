<template>
  <div class="page-website sub-page">
    <z-header title='网址'>
      <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="FORMER_PAGE()"></span>
    </z-header>
    <!-- 滚动区域 -->
    <scroll ref='wrapper' class="scroll scroll-top">
      <div class="scroll_content">
        <el-form ref="website" class="website_wrapper">
          <el-form-item>
            <el-input class="inputUrl" placeholder="http://" v-model="inputUrl" @keyup.enter="MAKE_CODE"></el-input>
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
/* eslint-disable */
export default {
  name: 'website',
  data () {
    return {
      inputUrl: ''
    }
  },
  methods: {
    FORMER_PAGE () {
      this.$router.go(-1)
    },
    MAKE_CODE () {
      if (this.inputUrl.length === 0) {
        this.$toast('请输入内容！')
      } else {
        let reg1 = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
        if (reg1.test(this.inputUrl)) {
          this.$router.push({
          name: 'beautifier',
          params: {
            data: this.inputUrl
          }
        })
        } else {
          this.$toast({
            message:'请输入正确的网址!'
          })
        }
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll_content {
  padding: 0.3rem 0.3rem 0;
  text-align: center;
}
</style>

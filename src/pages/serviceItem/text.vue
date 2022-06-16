<template>
  <div class="page-text sub-page">
    <z-header title='文本'>
      <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="FORMER_PAGE()"></span>
    </z-header>
    <!-- 滚动区域 -->
    <scroll ref='wrapper' class="scroll-content">
      <!-- 文字输入区域 -->
      <div class="input_area">
        <textarea name="textarea" class="inputText" cols="30" rows="10" placeholder="请输入文字内容" v-model="inputText" maxlength="150"></textarea>
        <!-- 字数限制 -->
        <span class="numCount" v-show="textLen" :class="{'spill':this.textLen === 150}">{{ textLen }}/150</span>
      </div>
      <!-- 生成按钮 -->
      <el-button type="primary" @click="MAKE_CODE">生成二维码</el-button>
    </scroll>
  </div>
</template>

<script>
// 引入组件
export default {
  name: 'inputText',
  data () {
    return {
      inputText: ''
    }
  },
  computed: {
    textLen () {
      return this.inputText.length
    }
  },
  methods: {
    /**
     * 返回上一步
     */
    FORMER_PAGE () {
      this.$router.go(-1)
    },
    // 生成二维码
    MAKE_CODE () {
      if (this.inputText.length === 0) {
        this.$toast('请输入内容！')
      } else {
        this.$router.push({
          name: 'beautifier',
          params: {
            data: this.inputText
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-content {
  width: 100%;
  text-align: center;
  padding: 0.3rem;
  .input_area {
    position: relative;
    margin-bottom: 0.3rem;
    .inputText {
    width: 100%;
    height: 2rem;
    font-size: .16rem;
    color: #7f7f7f;
    font-family: "Microsoft YaHei";
    outline: none;
    border: none;
    border-radius: 0.1rem;
    padding: 0.15rem;
  }
  .numCount {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    color: #999;
    &.spill {
      color: red;
    }
  }
  }
  .tips {
    color: #ffffff;
  }
  .el-button {
    box-shadow: 0.01rem 0.01rem 0.05rem #346598;
  }
}
</style>

<template>
  <div class="page-image sub-page">
    <z-header title='图片'>
      <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="goBack()"></span>
    </z-header>
    <!-- 滚动区域 -->
    <scroll ref='wrapper' class="scroll scroll-top">
      <div class="scroll_content">
        <div style="margin-bottom:0.3rem;">
          <!-- 图片信息 -->
          <div v-if="imgUrl" class="pic_wrapper">
            <img  :src="imgUrl">
          </div>
          <!-- 上传框 -->
          <div v-else>
            <input id="file" type="file" name="file" accept="image/*" @change="SELECT_IMG" style="position:fixed;bottom:0;opacity:0;">
            <label for="file" class="file_upload"><i class="iconfont icon-tianjia"></i></label>
          </div>
        </div>
        <!-- 生成按钮 -->
        <el-button type="primary" @click="MAKE_CODE">生成二维码</el-button>
      </div>
    </scroll>
  </div>
</template>

<script>
export default {
  name: 'images',
  data () {
    return {
      imgUrl: '',
      filename: '',
      text: ''
    }
  },
  methods: {
    SELECT_IMG (pic) {
      let self = this
      let file = pic.target.files[0]
      let data = new FormData()
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        self.imgUrl = this.result
      }
      data.append('file', file, file.name)
      this.axios.post('/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        this.text = res.data.url
      }).catch(err => {
        console.log(err)
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    // 生成二维码
    MAKE_CODE () {
      if (!this.text) {
        this.$toast('请选择图片')
      } else {
        this.$router.push({
          name: 'beautifier',
          params: {
            data: this.text
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-image{
  text-align:center;
  .scroll_content {
    padding-top: 0.3rem;
    .file_upload {
      position: relative;
      display: block;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      margin: 0 auto;
      text-align: center;
      text-indent: -9999;
      background: #fff;
      border: 0.03rem dashed #ddd;
      border-radius: 0.1rem;
      overflow: hidden;
      i {
        font-size: 0.5rem;
        color: #ddd;
      }
    }
    .pic_wrapper {
      width: 2rem;
      height: 2rem;
      margin: 0 auto;
      border-radius: 0.1rem;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
      p {
        color:#333
      }
    }
  }
}
</style>

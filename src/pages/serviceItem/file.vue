<template>
  <div class="page-image sub-page">
    <z-header title='文件'>
      <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="FORMER_PAGE()"></span>
    </z-header>
    <!-- 滚动区域 -->
    <scroll ref='wrapper' class="scroll scroll-top">
      <div class="scroll_content">
        <div style="margin-bottom:0.3rem;">
          <div class="before_upload" v-if="!this.filename">
            <label for="file" class="file_upload"><i class="iconfont icon-tianjia"></i></label>
            <input id="file" type="file" name="file" @change="SELECT_IMG" style="opacity:0;">
          </div>
          <div class="after_upload" v-else>
            <img src="../../assets/common/file.png" alt="" >
            <span>{{ filename }}</span>
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
        this.filename = res.data.filename
      }).catch(err => {
        console.log(err)
      })
    },
    FORMER_PAGE () {
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
    .before_upload {
      .file_upload {
        position: relative;
        display: block;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        margin: 0 auto;
        text-align: center;
        background: #fff;
        border: 0.03rem dashed #ddd;
        border-radius: 0.1rem;
        overflow: hidden;
        i {
          font-size: 0.5rem;
          color: #ddd;
        }
      }
    }
    .after_upload {
      width: 2rem;
      height: 2rem;
      margin: 0 auto;
      padding: 0.25rem;
      border: 0.03rem dashed #ddd;
      border-radius: 0.1rem;
      img {
        display: block;
        width: auto;
        height: 100%;
        margin: 0 auto;
      }
      span {
        display: inline-block;
        width: 100%;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
      }
    }
  }
}
</style>

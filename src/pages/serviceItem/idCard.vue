<template>
  <div class="page-card sub-page">
    <z-header title='名片'>
      <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="FORMER_PAGE()"></span>
    </z-header>
    <!-- 滚动区域 -->
    <scroll ref='wrapper'>
      <div class="card_wrapper">
        <el-form  ref="user" class="card-info" :model="userInfo" :rules="rules" :inline="true" label-width="0.6rem">
          <label class="avatar_wrapper" for="avatar">
            <input type="file" name="avatar" id="avatar" style="display:none;" accept="image/*" @change="DEAL_AVATAR">
            <i v-if="!userInfo.avatar" class="iconfont icon-tianjia"></i>
            <img v-else :src="userInfo.avatar" alt="头像">
          </label>
          <el-form-item label="姓名">
            <el-input v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="userInfo.sex"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="userInfo.age"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="userInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="学习">
            <el-input v-model="userInfo.campany"></el-input>
          </el-form-item>
          <!-- <el-form-item label="职位">
            <el-input v-model="userInfo.position"></el-input>
          </el-form-item> -->
          <el-form-item style="margin-top:0.2rem;">
            <el-button type="primary" @click="SUBMIT()">生成二维码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </scroll>
  </div>
</template>

<script>
export default {
  name: 'IdCard',
  data () {
    return {
      userInfo: {
        avatar: '',
        name: '',
        sex: '',
        age: '',
        phone: '',
        campany: '',
        position: ''
      },
      rules: {}
    }
  },
  methods: {
    FORMER_PAGE () {
      this.$router.go(-1)
    },
    // 表单提交
    SUBMIT () {
      this.$refs['user'].validate(valid => {
        if (valid) {
          this.axios.post('/users/card', this.userInfo).then(res => {
            console.log(res)
          })
        }
      })
    },
    DEAL_AVATAR (e) {
      let self = this
      let file = e.target.files[0]
      if (!file) {
        return
      }
      e.target.value = null
      let reader = new FileReader()
      reader.onload = function (evt) {
        self.userInfo.avatar = evt.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss" scoped>
.card_wrapper {
  text-align: center;
  padding-top: 0.7rem;
  h2 {
    line-height: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .card-info {
    position: relative;
    border: 0.01rem solid #eee;
    border-radius: 0.1rem;
    margin: 0 0.3rem;
    padding-top: 0.7rem;
    background: #fff;
    .avatar_wrapper {
      position: absolute;
      top: -0.5rem;
      left: 1.07rem;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      border-radius: 50%;
      background: #ededed;
      overflow: hidden;
      .iconfont {
        font-size: 0.5rem;
        color: #fff;
      }
    }
  }
}
</style>

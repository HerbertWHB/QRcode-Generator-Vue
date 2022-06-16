<template>
  <div class="page-view page-login">
    <div class="content">
      <p class="desc">Artist QRCode</p>
      <ul>
        <!-- 账号 -->
        <li>
          <i class="iconfont icon-yonghuming"></i>
          <input type="text" placeholder="Username" v-model="username">
        </li>
        <!-- 密码 -->
        <li>
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="Password" v-model="password">
        </li>
      </ul>
      <!-- 忘记密码 -->
      <span class="forget" @click="Forget()">Forget</span>
      <!-- 登录 -->
      <button @click="LOG_IN()" class="login">Login</button>
      <!-- 注册 -->
      <p class="register">Don't have an account? <i style="color:#4590ea;font-style:normal" @click="Register()">register!</i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      password: '',
      username: ''
    }
  },
  created () {
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    Forget () {
      console.log('忘记密码')
    },
    LOG_IN () {
      let postData = {
        username: this.username,
        password: this.password
      }
      this.axios.post('/users/login', postData).then(res => {
        if (res.state === 1) {
          localStorage.setItem('state', 1)
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('password', res.data.password)
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          this.$toast('登录成功')
          setTimeout(() => {
            this.$router.replace({
              name: 'index'
            })
          }, 2000)
        } else {
          this.$toast(res.msg || '登录失败')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    Register () {
      this.axios.post('users/register').then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff url(../../assets/login/background.png) no-repeat fixed;
  background-size: 100% auto;
  z-index: 1;
  .content {
    position: relative;
    padding-top: 75%;
    width: 100%;
    z-index: 10;
    background: url(../../assets/login/logo.png) no-repeat center 0.8rem;
    background-size: 25%;
    .desc {
      position: relative;
      top: -1rem;
      text-align: center;
      font-weight: bold;
      color: #ffffff;
    }
    ul {
      margin: 0 auto;
      li {
        margin: 0.5rem;
        border-bottom: 0.01rem solid #eee;
        .iconfont {
          font-size: 0.24rem;
          color: #999;
        }
        input {
          vertical-align: top;
          background: transparent;
          border: none;
          outline: none;
          height: 0.3rem;
          padding-left: 0.05rem;
          font-size: 0.16rem;
          color: #999;
          &::-webkit-input-placeholder {
            color:#999;
          }
        }
      }
    }
    .forget {
      float: right;
      margin-top: -0.3rem;
      margin-right: 0.4rem;
      color: #4590ea;
    }
    .login {
      display: block;
      margin: 0.8rem auto 0 auto;
      width: 60%;
      height: 0.4rem;
      border-radius: 0.2rem;
      color: #ffffff;
      font-weight: bold;
      font-size: 0.16rem;
      border: none;
      outline: none;
      background: linear-gradient(left,#24aaf9,#3682f1);
    }
    .register {
      padding: 0.2rem;
      text-align: center;
      color: #999;
    }
  }
}
</style>

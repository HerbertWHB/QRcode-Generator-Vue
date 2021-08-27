<template>
  <div class="page-view page-my">
    <!-- 滚动区域 -->
    <scroll ref="scroll" class="scroll scroll-bottom">
      <div class="scroll-content">
        <!-- 用户名片 -->
        <div class="top_wrapper" style="padding-bottom:0.3rem;background:#fff;padding-top:0.15rem;">
          <div class="user_card">
            <div class="lf user_info">
              <h3>{{ userInfo.name }}</h3>
              <p class="phone">{{ userInfo.phone }}</p>
              <p class="campany">{{userInfo.company}}</p>
            </div>
            <div class="rg user_avatar"></div>
          </div>
        </div>
        <div style="width:100%;height:0.12rem;background:#f8f8f8;"></div>
        <ul class="opera_list">
         
          <li @click="LOGOUT()">退出登录</li>
        </ul>
      </div>
    </scroll>

    <navbar/>
  </div>
</template>

<script>
// 引入组件
export default {
  name: 'my',
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    actionSheet () {
      this.sheetVisible = true
    },
    LOGOUT () {
      this.$messagebox.confirm('退出登录？').then(action => {
        if (action === 'confirm') {
          localStorage.clear()
          this.$router.replace({
            name: 'login'
          })
          setTimeout(() => {
            this.$toast('账号已退出!')
          })
        }
      }).catch(err => {
        if (err === 'cancel') {
        }
      })
    }
  },
  created () {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  }
}
</script>

<style lang="scss" scoped>
.page-my {
  font-family: "Microsoft YaHei";
  .scroll {
    background: #f8f8f8;
  }
  .scroll-content {
    .user_card {
      display: flex;
      height: 2rem;
      padding: 0.2rem;
      margin: 0 0.15rem;
      background: url('../../assets/my/user_card.jpg') no-repeat center bottom;
      background-size: 100%;
      border-radius: 0.1rem;
      font-family: "Microsoft YaHei";
      color: #fff;
      .user_info {
        flex: 0.8;
        h3 {
          font-weight: normal;
          margin-bottom: 0.05rem;
        }
        .phone {
          font-size: 0.14rem;
          margin-bottom: 0.05rem;
        }
        .campany {
          font-size: 0.12rem;
        }
      }
      .user_avatar {
        flex: 0.2;
      }
    }
    .opera_list {
      li {
        padding: 0 0.15rem;
        height: 0.5rem;
        line-height: 0.5rem;
        margin-bottom: 0.12rem;
        background: #Fff;
        &:last-child{
          margin: 0;
        }
      }
    }
  }
}
</style>

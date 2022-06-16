// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/axios/index'
import './config/rem' // 自适应布局
import './utils/utils' // 公共方法
import './style/common.scss' // 全局样式
import MintUI from 'mint-ui' // mint-ui
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui' // element-ui
import 'element-ui/lib/theme-chalk/index.css'
import './fonts/iconfont.css' // iconfont样式
import FastClick from 'fastclick'
// 引入公共组件
import AppHeader from '../src/components/AppHeader/AppHeader'
import Scroll from '../src/components/Scroll/Scroll'
import Navbar from '../src/components/Navbar/Navbar'

// 全局挂载
Vue.prototype.axios = axios

// 使用中间件
Vue.use(MintUI)
Vue.use(ElementUI)

// 全局注册组件
Vue.component('scroll', Scroll)
Vue.component('zHeader', AppHeader)
Vue.component('navbar', Navbar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

FastClick.attach(document.body)

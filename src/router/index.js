import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store/index'

// 按需加载组件
const Login = () => import('@/pages/home/Login') // 登录
const My = () => import('@/pages/home/My') // 我的
const Index = () => import('@/pages/home/Index') // 首页

const ActiveCode = () => import('@/pages/activeCode/active-code') // 活码
const Beautifier = () => import('@/pages/beautifier/beautifier') // 美化器

const Text = () => import('@/pages/serviceItem/text') // 文本
const Website = () => import('@/pages/serviceItem/website') // 网址
const File = () => import('@/pages/serviceItem/file') // 文件
const Image = () => import('@/pages/serviceItem/image') // 图片
const Media = () => import('@/pages/serviceItem/media') // 媒体
const IdCard = () => import('@/pages/serviceItem/idCard') // 名片
const Wechat = () => import('@/pages/serviceItem/wechat') // 微信

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login',
      component: Login
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 我的
    {
      path: '/my',
      name: 'my',
      component: My
    },
    // 首页
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        required: true
      },
      children: [
        // 文本
        {
          path: 'text',
          name: 'text',
          component: Text
        },
        // 网址
        {
          path: 'website',
          name: 'website',
          component: Website
        },
        // 文件
        {
          path: 'file',
          name: 'file',
          component: File
        },
        // 图片
        {
          path: 'image',
          name: 'image',
          component: Image
        },
        // 音视频
        {
          path: 'media',
          name: 'media',
          component: Media
        },
        // 名片
        {
          path: 'card',
          name: 'card',
          component: IdCard
        },
        // 微信
        {
          path: 'wechat',
          name: 'wechat',
          component: Wechat
        }
      ]
    },
    // 美化器
    {
      path: '/beautifier',
      name: 'beautifier',
      component: Beautifier
    },
    {
      path: '/activeCode',
      name: 'activeCode',
      component: ActiveCode
    }
  ]
})
router.beforeEach((to, from, next) => { // 全局前置守卫
  let state = localStorage.getItem('state')
  if (to.meta.required) {
    if (!state) {
      router.replace('login')
      localStorage.clear()
    }
  }
  next()
})
router.beforeResolve((to, from, next) => { // 全局解析守卫
  // console.log('全局解析守卫')
  next()
})
router.afterEach((to, from) => { // 全局后置钩子，不改变导航本身，也不会接受next函数
  // console.log('全局后置钩子')
})
export default router

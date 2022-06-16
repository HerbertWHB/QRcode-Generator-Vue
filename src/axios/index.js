import axios from 'axios'

axios.defaults.baseURL = '/api'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  }
)

// 封装统一的post请求
export default {
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

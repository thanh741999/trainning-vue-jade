import axios from 'axios'
import store from '@/store'

// create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://phanolink.herokuapp.com/api',
    headers: {
      'Content-Type': 'application/json'
    },
  timeout: 30000 // request timeout,
})

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    store.commit('SET_LOADING',true)
      if (localStorage.getItem('access_token')) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token')
      }
    return config
  },
  (error) => Promise.reject(error)
)

// response interceptor
axiosInstance.interceptors.response.use(
  response => {
      store.commit('SET_LOADING',false)
      return response
  },
  error => {
      store.commit('SET_LOADING',false)
      return Promise.reject(error)
  }
)

export const ApiService = {

  get (url, params = {}) {
    return axiosInstance.get(`${url}`, { params })
  },

  post (url, body, config = {}) {
    return axiosInstance.post(`${url}`, body, config)
  },

  put (url, body, params = {}) {
    return axiosInstance.put(`${url}`, body, { params })
  },

  delete (url, params = {}) {
    return axiosInstance.delete(url, params)
  },
  patch (url, body, params = {}) {
      return axiosInstance.patch(`${url}`, body, { params })
  },
}

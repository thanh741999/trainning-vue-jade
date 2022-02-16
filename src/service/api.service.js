import axios from 'axios'
import store from '@/store'

// create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://phanolink.herokuapp.com/api',
  timeout: 30000 // request timeout
})

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config)
    store.dispatch('product/setLoading', true)
    return config
  },
  (error) => Promise.reject(error)
)

// response interceptor
axiosInstance.interceptors.response.use(
  response => {
    console.log(response)
    store.dispatch('product/setLoading', false)
    return response
  },
  error => Promise.reject(error)
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
  }
}

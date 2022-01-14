import axios from 'axios'

// create an axios instance
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  // In case that in need token
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000 // request timeout
})

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// response interceptor
axiosInstance.interceptors.response.use(
  response => response,
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

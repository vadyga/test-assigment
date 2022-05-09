import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import store from '@/store'

const axiosParams = {
  baseURL: '/api'
}

const axiosInstance = axios.create(axiosParams)

/**
 * Перехватываем при запросе
 *
 * Получаем токен авторизации, указываем его в конфигурации и возвращаем конфиг
 */
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = store.getters['user/getAccessToken']
  if (accessToken) {
    config.headers.common.Authorization = `Bearer ${accessToken}`
  }
  return config
})

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => axios.get(url, config),
    post: <T>(url: string, body: T, config = {}) => axios.post(url, body, config),
    put: <T>(url: string, body: T, config = {}) => axios.put(url, body, config),
    patch: <T>(url: string, body: T, config = {}) =>
      axios.patch(url, body, config),
    delete: (url: string, config = {}) => axios.delete(url, config)
  }
}

export default api(axiosInstance)

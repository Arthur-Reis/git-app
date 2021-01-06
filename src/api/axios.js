import { decamelizeKeys, camelizeKeys } from 'humps'
import { api_instance } from './index'

function request() {
  const instance = api_instance

  instance.interceptors.request.use(
    async function (config) {
      if (config.data) {
        const decamelizedData = decamelizeKeys(config.data, { separator: '_' }) || {}
        config.data = { ...(decamelizedData.data || {}) }
      }
      config.headers = {
        ...config.headers
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (config) => camelizeKeys(config),
    (error) => {
      return Promise.reject(error.response?.data || error)
    }
  )

  return instance
}

export default request()

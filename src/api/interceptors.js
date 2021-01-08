import { decamelizeKeys, camelizeKeys } from 'humps'
import { api_instance } from './index'

function request(instance) {
  //intercept requests before they are handled by (get)THEN or (try)CATCH --axios
  instance.interceptors.request.use(
    async function (config) {
      if (config.data) {
        const decamelizedData = decamelizeKeys(config.data, { separator: '_' }) || {} //humps
        config.data = { ...(decamelizedData.data || {}) }
      }
      return config
    },

    function (error) {
      return Promise.reject(error)
    }
  )

  //intercept responses before they are handled by (get)THEN or (try)CATCH --axios
  instance.interceptors.response.use(
    (config) => camelizeKeys(config), //humps
    (error) => {
      return Promise.reject(error.response?.data || error)
    }
  )

  return instance
}

export default request()

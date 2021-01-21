import { decamelizeKeys, camelizeKeys } from 'humps'
import axios from 'axios'
import { API_URL, TOKEN, USER } from '@env'

function request() {
  const api_instance = axios.create({
    baseURL: API_URL,
    auth: {
      username: USER,
      password: TOKEN
    }
  })
  //intercept requests before they are handled by (get)THEN or (try)CATCH --axios
  api_instance.interceptors.request.use(
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
  api_instance.interceptors.response.use(
    (config) => camelizeKeys(config), //humps
    (error) => {
      return Promise.reject(error.response?.data || error)
    }
  )

  return api_instance
}

export default request()

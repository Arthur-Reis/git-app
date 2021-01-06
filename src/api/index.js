import axios from 'axios'
import { API_URL } from '@env'

const api_instance = axios.create({
  baseURL: 'https://api.github.com'
})
export default api_instance

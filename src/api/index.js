import axios from 'axios'
import { API_URL } from '@env'

const api_instance = axios.create({
  baseURL: API_URL
})
export default api_instance

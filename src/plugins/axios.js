import axios from 'axios'

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL_V1,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

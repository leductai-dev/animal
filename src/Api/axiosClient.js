import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: 'https://tdl-api-generator.herokuapp.com/api',
  // baseURL: 'http://localhost:3000/api',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

const accessToken = window.localStorage.getItem('accessToken')

//? Before send request => attach token to request
//? Set the auth token for any request
axiosClient.interceptors.request.use(async (config) => {
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
  return config
})

//? Handle request error general case
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    // Error
    const {
      config,
      response: { status },
    } = error

    if (status === 401) {
      //? Unauthorized request: maybe access token has expired!
      // return refreshAccessToken(config)
      return
    } else {
      return Promise.reject(error)
    }
  },
)
export default axiosClient

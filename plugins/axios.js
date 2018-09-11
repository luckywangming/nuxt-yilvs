import axios from 'axios'
import config from '~/http/api.config.js'

const instance = axios.create({
  baseURL: config.testBaseUrl,
  timeout: 5000,
  headers: {'X-Custom-Header': 'application/x-www-form-urlencoded'}
})


instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


export default instance

import axios from 'axios';
import storageKeys from '../constants/storage-keys';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const access_token = localStorage.getItem(storageKeys.TOKEN);

    if (access_token) {
      config.headers.Authorization = 'Bearer ' + access_token;
    }

    console.log(config);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log('ERROR res', error.response);

    const {config, data, status} = error.response;

    const URLS = ['/auth/signup', 'auth/signin'];

    if(URLS.includes(config.url) && status === 400) {
      const {error} = data;

      console.log(error.message);

      throw new Error(error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;

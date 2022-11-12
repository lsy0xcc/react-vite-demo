/* eslint no-param-reassign: ["error", {"props" :false}] */
import axios from 'axios';

const instance = axios.create({ baseURL: '/api' });
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers = { ...config.headers, access_token: token };
  }
  return config;
});

export default instance;

import axios from './axios';

export default {
  getHello: async () => axios.get('/long-time-hello'),
  getHelloUser: async (input = '') =>
    axios.get('/hello-user', { params: { name: input } }),
};

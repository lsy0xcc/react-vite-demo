import axios from './axios';

export default {
  getHello: async () => {
    try {
      const res = await axios.get('/long-time-hello');
      return res;
    } catch (err: any) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message);
      }
      throw err;
    }
  },
  getHelloUser: async (input = '') =>
    axios.get('/hello-user', { params: { name: input } }),
  getList: async (pageNo: number, pageSize: number = 10): Promise<any[]> =>
    new Promise((res) => {
      setTimeout(() => {
        const begin = pageSize * (pageNo - 1);
        const end = begin + pageSize;
        const result: any[] = [];
        for (let i = begin; i < end; i++) {
          result.push({ id: i, name: `item${i}` });
        }
        const finalResult = begin >= 100 ? [] : result;
        res(finalResult);
      }, 500);
    }),
};

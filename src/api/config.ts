import axios from 'axios';

const serverUrl = process.env.NEXT_PUBLIC_TEST_SERVER;
console.log('BASE입니다', serverUrl);
export const instance = axios.create({
  baseURL: serverUrl ?? 'https://example.dev/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer test',
  },
});

instance.interceptors.request.use(
  (config) => {
    console.log(config.baseURL);
    if (config.headers === undefined) return;

    // const token = localStorage.getItem('accessToken');
    // config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  },
  (err) => {
    console.log('ERROR:', err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log('ERROR:', err);
    return Promise.reject(err);
  }
);

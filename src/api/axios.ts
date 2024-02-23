import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie"

export const api = axios.create({
  baseURL: 'http://127.0.0.1',
  // baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cookies.get('token'); // substitua pelo método adequado para obter o token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
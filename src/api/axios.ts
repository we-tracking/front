import axios from "axios";
import Cookies from "js-cookie"

export const api = axios.create({
  baseURL: 'http://127.0.0.1',
  // baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

type CustomAxiosRequestHeaders = {
  headers: {
    Authorization?: string;
  }
  // Outros cabeçalhos necessários...
};


api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers = config.headers || {};

      // Agora, 'config.headers' não é 'undefined'
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
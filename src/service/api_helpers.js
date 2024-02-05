import axios from 'axios';

const API_URLS = ['http://127.0.0.1:8000/', 'http://127.0.0.1:8001/'];

function getRandomBaseUrl() {
  return API_URLS[Math.floor(Math.random() * API_URLS.length)];
}

const axiosApi = axios.create({
  baseURL: getRandomBaseUrl(), headers: {
    'Content-Type': 'application/json', 'Access-Control-Allow-Headers': '*', allowedHeaders: '*',
  },
});

axiosApi.interceptors.request.use((config) => {
  config.baseURL = getRandomBaseUrl();
  return config;
});

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => response.data);
}

export async function post(url, data, config = {}, token) {
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response.data);
}
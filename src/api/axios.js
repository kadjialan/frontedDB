/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { readToken } from '../utils';

const BASE_URL = 'http://localhost:3000/';

const httpClient = axios.create({
  baseURL: BASE_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer: ${readToken()}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { httpClient };

import axios, { AxiosError } from 'axios';
import ENV from '../config/env';
import { AppApi } from './types';
import { showErrorNotification } from '../lib/utils/notification';

const defaultHeaders = {
  'Accept-Language': 'ru',
  'Content-type': 'application/json',
};

const createRequestInstance = (): AppApi => {
  const instance = axios.create({
    baseURL: ENV.apiBaseUrl,
    headers: defaultHeaders,
    withCredentials: true,
  });

  instance.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {
      if (error.status === 401) {
      } else if (error.status === 500) {
        showErrorNotification('Сервер не доступен');
        return;
      }
      throw error.message;
    },
  );
  return instance as AppApi;
};

export const request = createRequestInstance();

import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import ENV from '../config/env';
import { AppApi } from './types';

const defaultHeaders = {
  'Accept-Language': 'ru',
  'Content-type': 'application/json',
};

const createRequestInstance = (
  isServer: boolean,
  errorBefore: null | AxiosError = null,
): AppApi => {
  const instance = axios.create({
    baseURL: ENV[isServer ? 'apiBaseUrl' : 'publicApiBaseUrl'],
    headers: defaultHeaders,
    withCredentials: true,
  });

  instance.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {
      const originalRequest: InternalAxiosRequestConfig<unknown> | undefined =
        error.config;
      if (!originalRequest || !originalRequest.method || !originalRequest.url)
        throw error;
      if (error.status === 401) {
        if (errorBefore) {
          throw errorBefore;
        }
        return (async () => {
          try {
            const request: AppApi = createRequestInstance(isServer, error);
            await request.post('/profile/refresh', null, {
              headers: {
                Cookie: originalRequest.headers.Cookie,
              },
            });
            return await request[
              originalRequest.method as keyof typeof request
            ](
              originalRequest.url as string,
              originalRequest.data ?? originalRequest,
              originalRequest,
            );
          } catch (error) {
            throw error;
          }
        })();
      } else if (error.status === 500) {
        console.error('Сервер не доступен: ', JSON.stringify(error));
        return;
      }
      throw error.message;
    },
  );
  return instance as AppApi;
};

export const request = createRequestInstance(false);
export const serverRequest = createRequestInstance(true);

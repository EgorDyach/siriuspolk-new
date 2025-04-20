import { request } from '@shared/api';

export const requestLogin = async (username: string, password: string) =>
  await request.post('/profile/login', null, {
    auth: {
      username,
      password,
    },
  });

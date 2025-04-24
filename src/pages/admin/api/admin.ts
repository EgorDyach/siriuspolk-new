import { request } from '@shared/api';

export const requestUncheckedCount = async (): Promise<{ count: number }> => {
  return await request.get('/person/count');
};

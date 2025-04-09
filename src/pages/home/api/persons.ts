import { request } from '@shared/api';
import { ApiResponse } from '@shared/api/types';
import { ShortPerson } from '@shared/model/types';

export const requestPersons = async (): Promise<ApiResponse<ShortPerson>> => {
  return await request.get('/persons');
};

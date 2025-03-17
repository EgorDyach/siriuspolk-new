import { request } from '@shared/api';
import { ApiResponse } from '@shared/api/types';
import { Person } from '@shared/model/types';

export const requestFullPerson = async (
  id: string | number,
): Promise<ApiResponse<Person>> => {
  return await request.get(`/persons/${id}`);
};

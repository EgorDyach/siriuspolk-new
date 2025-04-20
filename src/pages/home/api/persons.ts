import { request } from '@shared/api';
import { Person } from '@shared/model/types';

export const requestPersons = async (): Promise<Person[]> => {
  return await request.get('/person?check=true');
};

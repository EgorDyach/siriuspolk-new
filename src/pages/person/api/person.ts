import { request } from '@shared/api';
import { Person } from '@shared/model/types';

export const requestFullPerson = async (id: string | number): Promise<Person> =>
  await request.get(`/person/${id}`);

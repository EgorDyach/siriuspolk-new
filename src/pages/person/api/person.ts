import { serverRequest } from '@shared/api';
import { Person } from '@shared/model/types';

export const requestFullPerson = async (id: string | number): Promise<Person> =>
  await serverRequest.get(`/person/${id}`);

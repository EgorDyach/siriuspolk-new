import { request } from '@shared/api';
import { Person } from '@shared/model/types';

export const requestUncheckedPersons = async (): Promise<Person[]> =>
  await request.get('/person?check=false&status=false');

import { serverRequest } from '@shared/api';
import { Person } from '@shared/model/types';

export const requestHistories = async (): Promise<Person[]> => {
  return await serverRequest.get(`/person?check=true&status=false`);
};

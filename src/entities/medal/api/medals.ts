import { request } from '@shared/api';
import { Medal } from '@shared/model/types';

export const requestMedals = async (): Promise<Medal[]> =>
  await request.get('/medal');

export const requestCreateMedal = async (medal: Omit<Medal, 'id'>) =>
  await request.post('/medal/create', medal);

export const requestDeleteMedal = async (id: string | number) => {
  await request.delete(`/medal/${id}`);
};

export const requestUpdateMedal = async (medal: Medal) => {
  await request.put(`/medal`, medal);
};

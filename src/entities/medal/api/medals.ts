import { request } from '@shared/api';
import { Medal } from '@shared/model/types';

export const requestMedals = async (): Promise<Medal[]> =>
  await request.get('/medal');

export const requestCreateMedal = async (medal: Omit<Medal, 'id'>) =>
  await request.post('/medal/create', medal);

export const requestDeleteMedal = async (id: string | number) => {
  // TODO: удалить после реализации
  (() => id)();
  throw new Error('Удаление медалей не реализовано.');
};

export const requestUpdateMedal = async (medal: Medal) => {
  // TODO: удалить после реализации
  (() => medal)();
  throw new Error('Обновление медалей не реализовано.');
};

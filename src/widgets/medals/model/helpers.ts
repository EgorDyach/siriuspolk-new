import { Medal } from '@shared/model/types';

export const sortMedals = (medals: Medal[]) =>
  medals.sort((a: Medal, b: Medal) => a.id - b.id);

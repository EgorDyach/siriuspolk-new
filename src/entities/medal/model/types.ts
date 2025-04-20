import { Medal } from '@shared/model/types';

export type CurrentMedalType = {
  medal: Medal;
  index: number;
  type: 'edit' | 'delete';
} | null;

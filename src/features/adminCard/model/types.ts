import { Person } from '@shared/model/types';

export type AddPersonType = Person & {
  is_birth_unknown: boolean;
  is_death_unknown: boolean;
  is_alive: boolean;
  addToMainPage: boolean;
};

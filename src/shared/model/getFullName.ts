import { Person } from './types';

export const getFullName = (item: Person) => {
  return `${item.surname || ''} ${item.name || ''} ${item.patronymic || ''}`.trim();
};

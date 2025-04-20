import { Person } from '@shared/model/types';
import { NEW_ITEMS_PERIOD_DAYS } from './constants';

export const filterNew = (items: Person[]): Person[] => {
  return items.filter(
    (item) =>
      1000 *
        (new Date(item.date_published).getTime() +
          NEW_ITEMS_PERIOD_DAYS * 24 * 60 * 60) -
        new Date().getTime() >
      0,
  );
};

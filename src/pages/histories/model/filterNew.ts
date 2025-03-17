import { ShortPerson } from '@shared/model/types';
import { NEW_ITEMS_PERIOD_DAYS } from './constants';

export const filterNew = (items: ShortPerson[]): ShortPerson[] => {
  return items.filter(
    (item) =>
      1000 * (item.date_pulished + NEW_ITEMS_PERIOD_DAYS * 24 * 60 * 60) -
        new Date().getTime() >
      0,
  );
};

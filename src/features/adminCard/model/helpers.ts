import { Person } from '@shared/model/types';

export const getFullName = (item: Person) => {
  return `${item.surname || ''} ${item.name || ''} ${item.patronymic || ''}`.trim();
};

export const getModalTitle = (item: Person | undefined, isChecked: boolean) => {
  if (!item) return 'Создание анкеты ветерана';
  if (isChecked) return `${getFullName(item)} – изменение анкеты`;
  return `${getFullName(item)} – подтверждение анкеты`;
};

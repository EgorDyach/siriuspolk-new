import { FormDataType } from '../model/types';
import { request } from '@shared/api';
import { getDateDeath } from '../model/helpers';

// TODO: обновить запрос после изменения на бэке
export const requestCreatePerson = async ({
  mainInfo: {
    hasnt_photo,
    photo,
    rank,
    surname,
    name,
    lastname,
    is_birth_unknown,
    is_alive,
    is_death_unknown,
    death_year,
    birth_year,
    city,
  },
  medals,
  history,
  photos,
  contacts,
}: FormDataType): Promise<void> => {
  if (!death_year && !is_death_unknown && !is_alive)
    throw new Error('Не указан год смерти.');

  const datePublished = Math.floor(new Date().getTime() / 1000);
  const body = new FormData();

  if (hasnt_photo) body.append('main_photo', new File([], ''));
  if (photo && photo.item(0)) body.append('main_photo', photo.item(0)!);
  photos.forEach((file) => body.append('photo', file));
  body.append('medals', medals.map((e) => e.name).toString());

  return await request.post('/unreadedPersons', body, {
    params: {
      snl: `${surname} ${name} ${lastname}`,
      date_birth: is_birth_unknown ? 0 : birth_year,
      date_death: getDateDeath(!!is_death_unknown, !!is_alive, death_year!),
      city: city,
      rank: rank,
      history: history.content,
      contact_SNL: `${contacts.surname} ${contacts.name} ${contacts.lastname}`,
      contact_email: contacts.email,
      contact_telegram: contacts.tg,
      date_pulished: datePublished,
      role: true,
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

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

  const res: { id: string } = await request.post('/person/create', {
    surname,
    name,
    patronymic: lastname,
    date_birth: is_birth_unknown ? 0 : birth_year,
    date_death: getDateDeath(!!is_death_unknown, !!is_alive, death_year!),
    city,
    rank,
    medals: medals.map((el) => el.id),
    history: history.content,
    relative: history.relative,
    contact_patronymic: contacts.lastname,
    contact_name: contacts.name,
    contact_surname: contacts.surname,
    contact_email: contacts.email,
    contact_telegram: contacts.tg,
  });

  if (!hasnt_photo && photo && photo.item(0)) {
    const mainBody = new FormData();
    mainBody.append('file', photo.item(0)!);
    await request.post(`/person/file/upload/${res.id}?main=true`, mainBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  for (const file of photos) {
    const formdata = new FormData();
    formdata.append('file', file);
    await request.post(`/person/file/upload/${res.id}?main=false`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
};

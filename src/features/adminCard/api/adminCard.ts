import { request } from '@shared/api';
import { AddPersonType } from '../model/types';
import { getDateDeath } from '@entities/person/model/helpers';

export const requestDeletePerson = async (id: string | number) =>
  await request.delete(`/person/${id}`);

export const requestApprovePerson = async (id: string | number) =>
  await request.patch(`/person/validate/${id}`);

export const requestUpdatePerson = async ({
  rank,
  surname,
  name,
  patronymic,
  is_birth_unknown,
  is_alive,
  is_death_unknown,
  date_birth,
  date_death,
  city,
  medals,
  history,
  relative,
  contact_patronymic,
  contact_name,
  contact_surname,
  contact_email,
  contact_telegram,
  addToMainPage,
}: AddPersonType) =>
  await request.put(`/person`, {
    surname,
    name,
    patronymic,
    date_birth: is_birth_unknown ? 0 : date_birth,
    date_death: getDateDeath(!!is_death_unknown, !!is_alive, date_death!),
    city,
    rank,
    medals: medals.map((el) => el.id),
    history,
    relative,
    contact_patronymic,
    contact_name,
    contact_surname,
    contact_email,
    contact_telegram,
    main_page: addToMainPage,
  });

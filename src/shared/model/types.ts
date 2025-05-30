export type Person = {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  date_birth: number;
  date_death: number;
  city: string;
  history: string;
  rank: string;
  contact_email: string;
  contact_name: string;
  contact_surname: string;
  contact_patronymic: string;
  contact_telegram: string;
  medals: Medal[];
  relative: string;
  photo: PersonPhoto[];
  date_published: string;
};

export type Medal = {
  photo_link: string;
  name: string;
  id: number;
};

export type ShortPerson = {
  id: number;
  city: string;
  date_birth: number;
  date_death: number;
  history: string;
  role: boolean;
  main_photo: string;
  SNL: string;
  date_pulished: number;
};

export type Photo = {
  link: string;
  id: string;
  date: string;
  description: string;
};

export type PersonPhoto = {
  id: number;
  link: string;
  is_main: boolean;
};

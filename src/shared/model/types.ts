export type Person = {
  id: number;
  city: string;
  date_birth: number;
  date_death: number;
  history: string;
  role: boolean;
  main_photo: string;
  medals: string;
  SNL: string;
  photo: string;
  rank: string;
  date_pulished: number;
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
  src: string;
  date: string;
  alt?: string;
};

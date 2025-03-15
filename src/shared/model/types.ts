export type Person = {
  name: string;
  city: string;
  dateOfBirth: number | "unknown" | "alive";
  dateOfDeath: number | "unknown" | "alive";
  history: string;
  mainPhoto: string;
  medals: string[];
  photos: string[];
  published: number;
  rank: string;
  isHero: boolean;
  id: string;
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

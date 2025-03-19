import { create } from 'zustand';
import { MainFormValues } from './mainInfoSchema';
import { Medal } from './types';

interface FormStoreType extends MainFormValues {
  setValues: (data: MainFormValues) => void;
  server_medals: Medal[];
  medals: Medal[];
  setMedals: (v: Medal[]) => void;
  setServerMedals: (data: Medal[]) => void;
}

export const useFormStore = create<FormStoreType>((set) => ({
  name: '',
  surname: '',
  lastname: '',
  photo: null,
  hasnt_photo: false,
  birth_year: 0,
  is_birth_unknown: false,
  death_year: 0,
  is_death_unknown: false,
  is_alive: false,
  city: '',
  rank: '',
  server_medals: [],
  medals: [],
  setValues: (data) => {
    set(data);
  },
  setMedals: (medals) => set((store) => ({ ...store, medals: medals })),
  setServerMedals: (data) => {
    set((store) => ({
      ...store,
      server_medals: data,
    }));
  },
}));

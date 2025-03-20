import { create } from 'zustand';
import { MainFormValues } from './mainInfoSchema';
import { Medal } from './types';

interface FormStoreType extends MainFormValues {
  setValues: (data: MainFormValues) => void;
  server_medals: Medal[];
  medals: Medal[];
  history: string;
  setMedals: (v: Medal[]) => void;
  setHistory: (v: string) => void;
  setServerMedals: (data: Medal[]) => void;
  photos: File[];
  setPhotos: (photos: File[]) => void;
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
  photos: [],
  history: '',
  setValues: (data) => {
    set(data);
  },
  setHistory: (history) => {
    set((store) => ({ ...store, history }));
  },
  setMedals: (medals) => set((store) => ({ ...store, medals })),
  setPhotos: (photos) => set((store) => ({ ...store, photos })),
  setServerMedals: (data) => {
    set((store) => ({
      ...store,
      server_medals: data,
    }));
  },
}));

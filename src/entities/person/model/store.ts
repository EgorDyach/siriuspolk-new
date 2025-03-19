import { create } from 'zustand';
import { MainFormValues } from './schema';

export const useFormStore = create<
  MainFormValues & { setValues: (data: MainFormValues) => void }
>((set) => ({
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
  setValues: (data: MainFormValues) => {
    set(data);
  },
}));

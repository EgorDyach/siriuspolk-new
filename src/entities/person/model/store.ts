import { create } from 'zustand';
import { MainFormValues } from './mainInfoSchema';
import { FormDataType } from './types';
import { ContactsSchemaValues } from './contactsSchema';
import { Medal } from '@shared/model/types';

export interface FormStoreType extends FormDataType {
  server_medals: Medal[];
  errors: Record<string, string | undefined>;
  setServerMedals: (data: Medal[]) => void;
  setMainInfo: (data: Partial<MainFormValues>) => void;
  setMedals: (v: Medal[]) => void;
  setHistory: (v: string) => void;
  setErrors: (errors: Record<string, string | undefined>) => void;
  setPhotos: (photos: File[]) => void;
  setContacts: (data: Partial<ContactsSchemaValues>) => void;
}

export const useFormStore = create<FormStoreType>((set) => ({
  mainInfo: {},
  contacts: {},
  server_medals: [],
  medals: [],
  photos: [],
  history: {
    content: '',
  },
  errors: {},
  setMainInfo: (mainInfo) => {
    set((store) => ({ ...store, mainInfo }));
  },
  setErrors: (errors) => {
    console.log('Сохраняем ошибки в Zustand:', errors);

    set((store) => ({ ...store, errors }));
  },
  setContacts: (contacts) => {
    set((store) => ({ ...store, contacts }));
  },
  setHistory: (content) => {
    set((store) => ({ ...store, history: { content } }));
  },
  setMedals: (medals) => set((store) => ({ ...store, medals })),
  setPhotos: (photos) => set((store) => ({ ...store, photos })),
  setServerMedals: (server_medals) => {
    set((store) => ({
      ...store,
      server_medals,
    }));
  },
}));
